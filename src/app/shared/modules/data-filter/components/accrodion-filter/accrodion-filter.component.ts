import { Component, Input, OnInit, OnDestroy, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IAppState } from '../../../../../store/reducers';
import { IKeyValue } from '../../../../interfaces/response.interface';
import { FilterModel } from '../../../../models/filter.model';
import { isEmpty } from '../../../../utils/data-check';
import { deepCopy } from '../../../../utils/objects.util';
import { ItemSelectorComponent } from '../../../item-selector/components/item-selector/item-selector.component';
import { ResetSelectorService } from '../../../item-selector/service/reset-selector.service';
import { IDataFilters } from '../../interfaces';

@Component({
  selector: 'ngx-card-filter',
  templateUrl: './accrodion-filter.component.html',
  styleUrls: ['./accrodion-filter.component.scss']
})
export class AccrodionFilterComponent implements OnInit, OnDestroy {
  @ViewChildren(ItemSelectorComponent) itemSelectors: QueryList<ItemSelectorComponent>;
  @Input() dataFilters: IDataFilters;
  @Input() module: string = '';

  public isActive: boolean = false;
  public filterPayload: FilterModel = new FilterModel();

  private checkedValue: IKeyValue<string | number> = {};
  private destroy$: Subject<void> = new Subject<void>();

  private get getValidQueryParams(): any {
    const payload: FilterModel = deepCopy(this.filterPayload);

    // Clears empty value
    for (const key in payload) {
      if (isEmpty(payload[key])) {
        delete payload[key];
      }
    }

    if (!isEmpty(payload.date_full)) {
      const params = this.dataFilters.filterItems.find(item => item.type === 'DATE_RANGE')
      payload[params?.dateRange?.start.toLowerCase()] = payload?.date_full?.start;
      payload[params?.dateRange?.end.toLowerCase()] = payload?.date_full?.end;
      delete payload?.date_full;
    }

    return payload;
  }

  // user to reset the checkboxes
  checkBoxState= [false, false];
  classes_list: {id: number, name:{en: string, ar: string}}[];
  constructor(
    private readonly store: Store<IAppState>,
    private readonly resetSelectorService: ResetSelectorService
  ) { }

  ngOnInit(): void { 
    console.log('dataFilters', this.dataFilters);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSelect(searchParams: string, value: string, queryParam: string){
    this.filterPayload[searchParams] =  value;
    // filter results by class id not name
    if (queryParam == 'className')
      this.filterPayload[searchParams] = this.classes_list.find(Class=> Class.name.en == value).id
  }

  public onSubmit(): void {
    console.log('this.getValidQueryParams', this.getValidQueryParams);
    this.store.dispatch(this.dataFilters.filterMethod({ queryParams: this.getValidQueryParams }));
  }

  public onReset(): void {
    this.filterPayload = new FilterModel();
    this.checkBoxState= [false, false];

    // clearing select items' value
    let selectItemsCount: number= 0;
    // counting number of select items
    this.dataFilters.filterItems.forEach(filterItem=>{
      if (filterItem.type == 'SELECT')
        selectItemsCount++;
    });
    //clearing current select item
    let currentSelectItemIndex= 0;
    this.dataFilters.filterItems.forEach(filterItem=>{
      if (filterItem.type == 'SELECT'){
        currentSelectItemIndex++;
        var itemSelectorsArray= this.itemSelectors.toArray();
        itemSelectorsArray[currentSelectItemIndex-1].placeholder= filterItem.title;
      }
    });

    this.resetSelectorService.reset();
    this.onSubmit();
    console.log('dataFilters', this.dataFilters);

  }

  public onSearch(value: string, index: number): void {
    const filterItem = this.dataFilters.filterItems[index];
    if (!filterItem.searchOptions?.method) throw new Error('You should add search method')

    this.store.dispatch(
      filterItem.searchOptions.method({
        [filterItem.searchOptions.queryParam]: value,
        role: filterItem.searchOptions.role
      })
    );

    this.store.select(filterItem.searchOptions.selector)
      .pipe(takeUntil(this.destroy$))
      .subscribe(items => {
        filterItem.items = deepCopy(items)
        if (filterItem?.searchOptions?.queryParam == 'className'){
          this.classes_list= deepCopy(items);
          filterItem.items = deepCopy(items.map(item => item.name.en))
        }
      })
  }

  public onCheckboxChecked(isChecked: boolean, searchParams: string, value: string | number): void {
    const isBothChecked = !this.filterPayload[searchParams];
    if (isChecked) {
      this.filterPayload[searchParams] = isBothChecked ? value : '';
      this.checkedValue[value] = value;
    } else {
      delete this.checkedValue[value];
      const firstCheckedKey = Object.keys(this.checkedValue)[0] ?? '';
      this.filterPayload[searchParams] = isBothChecked ? this.checkedValue[firstCheckedKey] : '';
    }
  }
}
