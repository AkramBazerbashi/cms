import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  Input,
  OnDestroy,
  AfterViewInit,
} from "@angular/core";

@Component({
  selector: "ngx-infinite-scroll",
  styleUrls: ['./infinite-scroll.component.scss'],
  template: `
    <div #container class="infinite-scroll">
      <ng-content></ng-content>
      <div #anchor></div>
    </div>
    <div *ngIf="container.children.length == 0" class="text-center py-3">
      <h5 class="text-danger mb-0 pb-0 text-nowrap">NO DATA FOUND</h5>
    </div>
  `,
})
export class InfiniteScrollComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input() options = {};
  @Output() onScroll: EventEmitter<{ page: number; pageSize: number; }> = new EventEmitter<{ page: number; pageSize: number; }>();
  @ViewChild("anchor") anchor: ElementRef<HTMLElement>;
  @ViewChild("container") container: ElementRef<HTMLElement>;

  private page: number = 1;
  private observer: IntersectionObserver;

  constructor() { }

  get elementContainer() {
    return this.container.nativeElement;
  }

  get elementAnchor() {
    return this.anchor?.nativeElement;
  }

  ngOnInit() { }

  ngAfterViewInit(): void {
    const options = {
      root: this.isHostScrollable() ? this.elementContainer : null,
      ...this.options,
    };

    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.onScroll.emit({ page: this.page++, pageSize: 14 });
    }, options);

    this.elementAnchor && this.observer.observe(this.elementAnchor);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  private isHostScrollable() {
    const style = window.getComputedStyle(this.elementContainer);

    return (
      style.getPropertyValue("overflow") === "auto" ||
      style.getPropertyValue("overflow-y") === "scroll" ||
      style.getPropertyValue("overflow-y") === "auto"
    );
  }
}
