import { ChangeDetectionStrategy, Component, ChangeDetectorRef, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3';
import { checkArrayExist } from '../../utils/array.util';

export class DonutChartDatum {
  code: string;
  displayValue: string;
  count: number;
}

@Component({
  selector: 'ngx-donut-chart',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg></svg>`,
})
export class DonutChartComponent implements OnInit, OnChanges {
  @Input() public middleTitle: string;
  @Input() public middleColor: string;
  
  @Input() public slicesElementDomain: string[];
  @Input() public slicesElementColor: string[];
  
  @Input() public data: number[];

  @Input() public boxWidth: string = '90%';
  @Input() public boxHeight: string = '90%';

  hostElement: any; // Native element hosting the SVG container
  topLevelSvgElement: any; // Top level SVG element
  svgGroupElement: any;
  d3ArcGenerator: any;
  innerRadius: any; // Inner radius of donut chart
  outerRadius: any; // Outer radius of donut chart
  slicesElement: any; // Donut chart slice elements
  dataLabelsElement: any; // SVG data label elements
  totalLabel: any; // SVG label for total
  rawData: number[]; // Raw chart values array
  total: number; // Total of chart values
  colorScale: any; // D3 color provider
  pieData: any; // Arc segment parameters for current data set
  pieDataPrevious: any; // Arc segment parameters for previous data set - used for transitions
  colors = d3.scaleOrdinal(d3.schemeCategory10);

  // Pie function - transforms raw data to arc segment parameters
  pie = d3.pie()
    .startAngle(-1*Math.PI)
    .endAngle(1*Math.PI)
    .sort(null)
    .value((d: number) => d);
  
    percentTotal: string= '';
  
  constructor(public readonly elementRef: ElementRef, private changeDetectorRef: ChangeDetectorRef) {
    this.hostElement = this.elementRef.nativeElement;
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      this.updateChart(changes.data.currentValue);
    }
  }

  public updateChart(data: number[]) {
    if (!this.topLevelSvgElement) {
        this.createChart(data);
      return;
    }

    this.processPieData(data, false);

    this.updateSlices();

    this.updateLabels();

    this.percentTotal= '';
    this.topLevelSvgElement.selectAll('text').remove();
    this.addLabelsToTheDonut();
    if(this.middleTitle) this.addDonutTotalLabel(this.middleTitle, this.middleColor);

  }

  private updateSlices() {
    this.slicesElement = this.slicesElement.data(this.pieData);
    this.slicesElement.transition().duration(750).attrTween("d", this.arcTween);
  }

  private updateLabels() {
      this.totalLabel.text(this.total);
      this.dataLabelsElement.data(this.pieData);
      this.dataLabelsElement.each((datum, index, n) => {
        d3.select(n[index]).text(this.labelValueFn(this.rawData[index]));
      });
      this.dataLabelsElement.transition().duration(750).attrTween("transform", this.labelTween);
  }

  private updateTotal() {
    this.totalLabel.text(this.total);
  }


  private createChart(data: number[]) {

    this.processPieData(data);

    this.removeExistingChartFromParent();

    this.setChartDimensions(this.boxWidth, this.boxHeight);

    // this.setColorScale();
    this.setCustomColorScale(this.slicesElementDomain, this.slicesElementColor);

    this.addGraphicsElement();

    this.setupArcGenerator();

    this.addSlicesToTheDonut();

    this.addLabelsToTheDonut();

    if(this.middleTitle) this.addDonutTotalLabel(this.middleTitle, this.middleColor);
  }

  private processPieData(data: number[], initial = true): void {
    this.rawData = data;
    this.total = this.rawData.reduce((sum, next) => sum + next, 0);
    this.pieData = this.pie(data);

    if (initial) {
      this.pieDataPrevious = this.pieData;
    }
  }

  private removeExistingChartFromParent(): void {
    // That will clear all other SVG elements in the DOM
    d3.select(this.hostElement).select('svg').remove();
  }

  private setChartDimensions(boxWidth: string, boxHeight: string): void {
    this.topLevelSvgElement = d3.select(this.hostElement)
      .append('svg')
      .attr('width', boxWidth)
      .attr('height', boxHeight)
      .attr('viewBox', `0 0 185 120`);
  }

  private setColorScale(): void {
    this.colorScale = d3.scaleOrdinal(d3.schemeCategory10);
  }

  private setCustomColorScale(domain: string[], range: string[]): void {
    if(!checkArrayExist(domain) || !checkArrayExist(range)) {
      return this.setColorScale();
    }
    
    this.colorScale = d3.scaleOrdinal()
      .domain(domain)
      .range(range);
  }
 
  private addGraphicsElement(
    xDirection: number = 85,
    yDirection: number = 65
  ) {
    this.svgGroupElement = this.topLevelSvgElement
      .append("g")
      .attr("transform", `translate(${xDirection},${yDirection})`)
  }

  private setupArcGenerator() {
    this.innerRadius = 40;
    this.outerRadius = 60;
    this.d3ArcGenerator = d3.arc()
      .innerRadius(this.innerRadius)
      .outerRadius(this.outerRadius);
  }

  private addSlicesToTheDonut() {
    this.slicesElement = this.svgGroupElement
      .selectAll('allSlices')
      .data(this.pieData)
      .enter()
      .append('path')
      .attr('d', this.d3ArcGenerator)
      .attr('fill', (datum, index) => this.colorScale(`${index}`))
      .style('opacity', 1)
    }

  private addLabelsToTheDonut() {
    this.dataLabelsElement = this.svgGroupElement
      .selectAll('allLabels')
      .data(this.pieData)
      .enter()
      .append('text')
      .text(this.labelValueGetter)
      .attr('transform', (datum, index) => `translate(${this.d3ArcGenerator.centroid(datum)})`)
      .style('font-size', '12px')
      .style('fill', '#FFF')
      .style('font-weight', 'bold')
      .style('text-anchor', 'middle');
  }

  private addDonutTotalLabel(
    text: string = 'Withdrawn',
    color: string = '#1E5B63'
  ) {
    console.log('this.data', this.data);
    console.log('this.total', this.total);
    this.percentTotal= (+((Math.round((Math.max(...this.data)/this.total)* 100)) / 100).toFixed(2)* 100)+ ' %';
    this.totalLabel = this.topLevelSvgElement
      .append('text')
      .text(this.percentTotal)
      .attr('id', 'total')
      .attr('x', 85)
      .attr('y', 50)
      .style('fill', color)
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .style('text-anchor', 'middle')
    
    this.topLevelSvgElement
      .append('text')
      .text(text)
      .attr('id', 'widthdrow')
      .attr('x', 85)
      .attr('y', 70)
      .style('fill', color)
      .style('font-size', '14px')
      .style('font-weight', 'bold')
      .style('text-anchor', 'middle')
  }

  private labelValueGetter = (datum, index: number) => this.labelValueFn(this.rawData[index]);
 
  private labelValueFn(val: number) {
    const pct = Math.floor(val * 100 / this.total);
    return (pct < 4) ? '' : val.toString();
  }

  arcTween = (datum, index: number) => {
    const interpolation = d3.interpolate(this.pieDataPrevious[index], datum);
    this.pieDataPrevious[index] = interpolation(0);
    return (t) => this.d3ArcGenerator(interpolation(t));
  }

  labelTween = (datum, index: number) => {
    const interpolation = d3.interpolate(this.pieDataPrevious[index], datum);
    this.pieDataPrevious[index] = interpolation(0);
    return (t) => `translate(${this.d3ArcGenerator.centroid(interpolation(t))})`;
  }
}
