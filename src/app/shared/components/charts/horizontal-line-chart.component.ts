import { Component, OnDestroy, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'ngx-horizontal-line-chart',
  styles: [`
    div.tooltip-donut {
      position: absolute;
      text-align: center;
      padding: .5rem;
      background: #000;
      color: #313639;
      border: 1px solid #313639;
      border-radius: 8px;
      pointer-events: none;
      font-size: 1.3rem;
    }
  `],
  template: `
    <!-- <chart type="horizontalBar" [data]="data" [options]="options"></chart> -->
    <div id="my_dataviz"></div>
  `
})
export class HorizontalLineChartComponent implements OnInit {
  dataSet = [
    { Country: '#1', Value: 1200 },
    { Country: '#2', Value: 1890 },
    { Country: '#3', Value: 590 },
    { Country: '#4', Value: 1500 },
    { Country: '#5', Value: 1105 },
  ]

  // data: any;
  // options: any;
  // themeSubscription: any;

  // constructor(private theme: NbThemeService) {
  //   this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
  //     const colors: any = config.variables;
  //     const chartjs: any = config.variables.chartjs;

  //     this.data = {
  //       labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  //       datasets: [{
  //           label: 'Dataset 1',
  //           backgroundColor: colors.infoLight,
  //           borderWidth: 1,
  //           data: [this.random(), this.random(), this.random(), this.random(), this.random()],
  //         }
  //       ],
  //     };

  //     this.options = {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       elements: {
  //         rectangle: {
  //           borderWidth: 2,
  //         },
  //       },
  //       scales: {
  //         xAxes: [
  //           {
  //             gridLines: {
  //               display: true,
  //               color: chartjs.axisLineColor,
  //             },
  //             ticks: {
  //               fontColor: chartjs.textColor,
  //             },
  //           },
  //         ],
  //         yAxes: [
  //           {
  //             gridLines: {
  //               display: false,
  //               color: chartjs.axisLineColor,
  //             },
  //             ticks: {
  //               fontColor: chartjs.textColor,
  //             },
  //           },
  //         ],
  //       },
  //       legend: false 
  //       // {
  //       //   position: 'right',
  //       //   labels: {
  //       //     fontColor: chartjs.textColor,
  //       //   },
  //       // },
  //     };
  //   });
  // }

  // private random() {
  //   return Math.round(Math.random() * 100);
  // }

  // ngOnDestroy(): void {
  //   this.themeSubscription.unsubscribe();
  // }


  margin = { top: 0, right: 0, bottom: 30, left: 30 };
  width = 390 - this.margin.left - this.margin.right;
  height = 382 - this.margin.top - this.margin.bottom;
  svg: any;

  ngOnInit(): void {
    this.createSvg();
    this.initData();
  }

  createSvg() {
    this.svg = d3.select("#my_dataviz")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  initData() {
    // Add X axis
    const x = d3.scaleLinear()
      .domain([0, 1900])
      .range([0, this.width]);

    this.svg
      .append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)")
      .style("text-anchor", "end")

    this.svg
      .selectAll("line")
      .style("display", "none")

    // Y axis
    const y = d3.scaleBand()
      .range([0, this.height])
      .domain(['#1', '#2', '#3', '#4', '#5'])
      .padding(.6);

    this.svg
      .append("g")
      .call(d3.axisLeft(y))

    this.svg
      .selectAll("line")
      .style("display", "none");


    this.svg
      .selectAll("path")
      .style("color", "#EBEBEB")

    const div = d3.select("body")
      .append("div")
      .attr("class", "tooltip-donut")
      .style("opacity", 0);

    //Bars
    this.svg
      .selectAll("myRect")
      .data(this.dataSet)
      .enter()
      .append("rect")
      .attr("x", x(0))
      .attr("y", (d) => y(d.Country))
      .attr("width", (d) => x(d.Value))
      .attr("height", y.bandwidth())
      .attr("fill", "#1E5B6380")
      .on('mouseover', function (d, i) {
        d3.select(this)
          .transition()
          .duration(50)
          .attr('fill', '#FFC107');

        // Specify where to put label of text
        div.transition()
          .duration(50)
          .style("opacity", 1);

        // let num = (Math.round((d.Value / 4) * 100)).toString() + '%';
        // div
        // .style("left", `${d.pageX}px`)
        // .style("top", `${d.pageY}px`)    
      })
      .on('mouseout', function (d, i) {
        d3.select(this)
          .transition()
          .duration(50)
          .attr('fill', '#1E5B6380');

        // d3.select(`t${d.x}-${d.y}-${i}`)
        //   .remove();
      });
  }

}
