import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { IAppState } from '../../../../../store/reducers';
import { ClientUploaderService } from '../../services';
import { UploaderComponent } from '../uploader.component';

@Component({
  selector: 'ngx-card-reviewer',
  templateUrl: './card-reviewer.component.html',
  styleUrls: ['./card-reviewer.component.scss']
})
export class CardReviewerComponent extends UploaderComponent implements OnInit, OnDestroy {
  @Input() showWallpaper: boolean = true;
  @Input() showToggle: boolean = true;
  @Input() subtitle: string;
  @Input() key: string = '';

  constructor(
    public readonly clientUploaderService: ClientUploaderService,
    public readonly store: Store<IAppState>,
    public readonly router: Router
  ) {
    super(clientUploaderService, store, router)
  }

  ngOnInit(): void {
    this.setFile(this.key);
  }

  ngOnDestroy(): void {}
}