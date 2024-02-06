import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NbTagComponent, NbTagInputAddEvent } from '@nebular/theme';

@Component({
  selector: 'ngx-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss']
})
export class TagsListComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';

  @Input('tag') 
  public set model(value: string[]) {
    this.treesList = new Set([...value]);
  }

  @Output('tagChange') 
  public update: EventEmitter<string[]> = new EventEmitter()

  public treesList: Set<string> = new Set([]);

  constructor() { }

  ngOnInit(): void { }

  public onRemove(tag: NbTagComponent): void {
    this.treesList.delete(tag.text);
    this.onModelChange(this.treesList);
  }

  public onAdd({ value, input }: NbTagInputAddEvent): void {
    if (value) {
      this.treesList.add(value);
      this.onModelChange(this.treesList);
    }
    input.nativeElement.value = '';
  }

  private onModelChange(treesList: Set<string>): void {
    const payload: string[] = [...treesList.values()]
    this.model = payload;
    this.update.emit(payload);
  }
}
