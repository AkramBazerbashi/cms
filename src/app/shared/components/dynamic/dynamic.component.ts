import { 
  AfterViewInit, 
  ChangeDetectionStrategy, 
  Component, 
  ComponentFactoryResolver, 
  Input, 
  OnInit, 
  ViewChild, 
  ViewContainerRef 
} from '@angular/core';
import { IDynamicComponent } from '../../interfaces/dynamic-component.interface';

@Component({
  selector: 'ngx-dynamic-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button type="button" class="btn" 
      *ngFor="let tab of tabs; let index=index"
      [class]="tab.isActive ? activeButton : 'btn-default'"
      (click)="loadTabs(tab.component, tab.data, index)">
      {{tab.tab}}
    </button>

    <ng-content select="ng-template"></ng-content>
  `
})
export class DynamicTabsComponent implements OnInit, AfterViewInit {
  @ViewChild('view', { read: ViewContainerRef }) view: ViewContainerRef;
  @Input() tabs: IDynamicComponent[];
  @Input() activeButton: string = 'btn-green';

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) { }

  public ngOnInit(): void {}

  public ngAfterViewInit() {
    this.loadTabs(this.tabs[0].component, this.tabs[0].data, 0);
  }

  public loadTabs(tabComponent: any, tabData: string, tabIndex: number) {
    this.view?.clear(); //Remove all old component...

    this.setActiveTab(tabIndex); //Change activation of component state
    
    //Resolve Component...
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tabComponent);

    //Set component in template view...
    this.view?.createComponent(componentFactory);

    //Pass data to component - Optional -
    // const componentRef: ComponentRef<typeof tabComponent> = this.view.createComponent(componentFactory);
    // componentRef.instance.data = tabData;
    // componentRef.instance.output.subscribe((results: string) => { //Data get here });
  }

  private setActiveTab(tabInd: number): void {
    this.tabs.forEach((tab: IDynamicComponent, tabIndex: number) => {
      tab.isActive = tabIndex === tabInd;
    });
  }  
}
