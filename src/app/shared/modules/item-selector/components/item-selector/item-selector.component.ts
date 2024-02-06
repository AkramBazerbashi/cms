import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { debounceCallback } from '../../../../utils/debounce.util';
import { ResetSelectorService } from '../../service/reset-selector.service';

@Component({
  selector: 'ngx-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss']
})
export class ItemSelectorComponent implements OnInit, OnDestroy {
  public selected: boolean = false;
  public errorState: boolean = false;
  public isActive: boolean = false;
  public searchQuery: string = '';
  public defaultPlaceholder: string = '';
  private destroy$: Subject<void> = new Subject();

  @Input('itemSelector') model: any;
  @Output('itemSelectorChange') update: EventEmitter<any> = new EventEmitter()

  @Input() searchable: boolean = false;
  @Input() itemShowField: string = 'name';
  @Input() placeholder: string = '';
  @Input() errorMessage: string = '';
  @Input() itemsList: any[] = [];

  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private readonly resetSelectorService: ResetSelectorService
  ) { }

  ngOnInit(): void {
    this.resetSelectorService.getStatus().pipe(
      takeUntil(this.destroy$)
    ).subscribe(status => {
      if (status) {
        this.resetSelectedItem();
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public selectItem(item: any, index: number): void {
    this.selected = true;
    this.isActive = false;
    if (this.defaultPlaceholder.length === 0) {
      this.defaultPlaceholder = this.placeholder;
    }
    this.placeholder = item[this.itemShowField] ?? item.name ?? item.username ?? item.title ?? item;

    let response = typeof item === 'string' ? {
      title: item,
      value: item,
      index
    } : {
      ...item,
      index,
      value: (item.value != null || item.value != undefined) ? item.value : item.id,
    }

    this.onModelChange(response);
    this.onSelect.emit(response);
  }

  public onModelChange(value: any): void {
    this.model = value;
    this.update.emit(value)
  }

  public onShowSelector(): void {
    this.isActive = !this.isActive;
    // if (this.isActive && this.searchable && this.itemsList.length == 0) {
    //   this.onSearch.emit(this.searchQuery);
    // }
  }

  public resetSelectedItem(): void {
    this.itemsList = [];
    this.searchQuery = '';
    this.placeholder = this.placeholder?? this.defaultPlaceholder;
  }

  public onInputChange(input: InputEvent): void {
    debounceCallback(() => this.onSearch.emit(this.searchQuery), 500);
  }
}
