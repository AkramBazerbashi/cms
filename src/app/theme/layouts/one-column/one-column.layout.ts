import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NbLayoutDirection, NbMediaBreakpointsService, NbMenuItem, NbSidebarService, NbThemeService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
// import { SideBarService } from '../../../ core/utils/sidebar.service';
import { CategorySidebarService } from '../../../shared/modules/sidebars/services/category-sidebar.service';
import { LocalDirectionService } from '../../../shared/services/direction-flow/direction.service';
import { FilterService } from '../../../shared/services/filter/filter.service';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  templateUrl: './one-column.layout.html'
})
export class OneColumnLayoutComponent implements OnInit, AfterViewInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  sideBarWidthState: boolean = false;
  sideBarIsCollapsed: boolean = false;
  categorySidebarStatus: boolean = false;
  filterSidebarStatus: boolean = false;
  public sidebar_class: string = "menu-sidebar";
  public sidebarFilter_class: string = 'menu-sidebar__filter';
  public sidebarCategory_class: string = 'menu-sidebar__category';

  layout_direction: NbLayoutDirection;

  MENU_ITEMS: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: './assets/images/dashboard.svg',
      link: '/pages/dashboard',
      home: true,
    },
    {
      title: 'Manage Courses',
      icon: './assets/images/read-later.svg',
      link: '/pages/manage-courses'
    },
    {
      title: 'Manage Students',
      icon: './assets/images/face.svg',
      link: '/pages/manage-students'
    },
    {
      title: 'Placement Test',
      icon: './assets/images/doc.svg',
      link: '/pages/placement-test'
    },
    {
      title: 'Manage Accounts',
      icon: './assets/images/calculate.svg',
      link: '/pages/manage-accounts'
    },
    {
      title: 'Expenses',
      icon: './assets/images/cart-shop.svg',
      link: '/pages/expenses'
    },
    {
      title: 'Manage Users',
      icon: './assets/images/cap.svg',
      link: '/pages/manage-users'
    }
  ]

  constructor(
    private readonly localDirectionService: LocalDirectionService,
    // private readonly sidebarService: SideBarService,
    private readonly nbSidebarService: NbSidebarService,
    private readonly categorySidebarService: CategorySidebarService,
    private readonly filterService: FilterService,
    private readonly breakpointService: NbMediaBreakpointsService,
    private readonly themeService: NbThemeService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.layout_direction = this.localDirectionService.getDirection();

    if (this.layout_direction === NbLayoutDirection.RTL) {
      this.sidebar_class = 'menu-sidebar-rtl';
      this.sidebarFilter_class = 'menu-sidebar__filter-rtl';
      this.sidebarFilter_class = 'menu-sidebar__category-rtl';
    }

    this.filterService.getFilterBarStatus()
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => this.filterSidebarStatus = state)

    // this.sidebarService.getSideBarWidthState()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(state => this.sideBarWidthState = state)

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange().pipe(
      map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
      takeUntil(this.destroy$),
    )
      .subscribe((isLessThanXl: boolean) => this.sideBarIsCollapsed = isLessThanXl);
  }

  ngAfterViewInit(): void {
    //Close filter side bar and re detect to remove this error shit
    this.nbSidebarService.collapse('menu-sidebar__filter');
    this.nbSidebarService.collapse('menu-sidebar__category');
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
