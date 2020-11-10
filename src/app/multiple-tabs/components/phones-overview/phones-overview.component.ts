import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Phone } from '../../models/phone.model';

@Component({
  selector: 'app-phones-overview',
  templateUrl: './phones-overview.component.html',
  styleUrls: ['./phones-overview.component.scss']
})
export class PhonesOverviewComponent implements OnInit, OnDestroy {

  @Input()
  phones: Phone[];

  @Output()
  initialised = new EventEmitter();

  @Output()
  destroyed = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.initialised.emit();
  }

  ngOnDestroy() {
    this.destroyed.emit();
  }

}
