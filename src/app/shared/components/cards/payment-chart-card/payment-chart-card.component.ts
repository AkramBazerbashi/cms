import { 
  AfterViewInit, 
  ChangeDetectionStrategy, 
  Component, 
  ComponentFactoryResolver, 
  ComponentRef, 
  OnInit, 
  ViewChild, 
  ViewContainerRef 
} from '@angular/core';
import { IDynamicComponent } from '../../../interfaces/dynamic-component.interface';
import { DonutChartComponent } from '../../charts/donut-chart.component';

@Component({
  selector: 'ngx-payment-chart-card',
  templateUrl: './payment-chart-card.component.html',
  styleUrls: ['./payment-chart-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentChartCardComponent implements OnInit, AfterViewInit {
  @ViewChild('view', { read: ViewContainerRef }) view: ViewContainerRef;

  colorSchema = {
    middle: '#1E5B63',
    slicesColor: ['#FFC107', '#1E5B63', '#FF5252'],
    slicesDomain: ["0", "1", "2"]
  }

  dataSchema = {
    middle: 'Withdrawn',
    slices: [300,400,600]
  }

  public tabs: IDynamicComponent[] = [
    {
      tab: 'Daily',
      isActive: false,
      data: {
        colorSchema: this.colorSchema,
        dataSchema: this.dataSchema
      },
      component: DonutChartComponent
    },
    {
      tab: 'Weekly',
      isActive: true,
      data: {
        colorSchema: this.colorSchema,
        dataSchema: this.dataSchema
      },
      component: DonutChartComponent
    },
    {
      tab: 'Monthly',
      isActive: false,
      data: {
        colorSchema: this.colorSchema,
        dataSchema: this.dataSchema
      },
      component: DonutChartComponent
    },
  ]

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {}

  public ngAfterViewInit() {
    this.loadTabs(this.tabs[0].component, this.tabs[0].data, 0);
  }

  public loadTabs(tabComponent: any, tabData: any, tabIndex: number) {
    this.view?.clear(); //Remove all old component...

    this.setActiveTab(tabIndex); //Change activation of component state
    
    //Resolve Component...
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tabComponent);

    //Set component in template view...
    // this.view?.createComponent(componentFactory);

    //Pass data to component - Optional -
    const componentRef: ComponentRef<typeof tabComponent> = this.view.createComponent(componentFactory);
    
    componentRef.instance.slicesElementColor = tabData.colorSchema.slicesColor;
    componentRef.instance.slicesElementDomain = tabData.colorSchema.slicesDomain;
    
    componentRef.instance.boxWidth = '220px';
    componentRef.instance.boxHeight = '300px';

    componentRef.instance.data = tabData.dataSchema.slices;
    componentRef.instance.updateChart(tabData.dataSchema.slices);
    // componentRef.instance.output.subscribe((results: string) => { //Data get here });
  }

  private setActiveTab(tabInd: number): void {
    this.tabs.forEach((tab: IDynamicComponent, tabIndex: number) => {
      tab.isActive = tabIndex === tabInd;
    });
  }
}
