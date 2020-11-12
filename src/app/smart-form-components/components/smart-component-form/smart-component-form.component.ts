import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormChangedEvent} from '../../../shared/events/form-changed.event';
import {FormData} from '../../models/form-data.model';

@Component({
  selector: 'app-smart-component-form',
  templateUrl: './smart-component-form.component.html',
  styleUrls: ['./smart-component-form.component.scss']
})
export class SmartComponentFormComponent implements OnInit {

  @Input()
  initialValue: FormData;

  @Output()
  formChanged = new EventEmitter<FormChangedEvent<FormData>>();

  upfrontLoadedPhone: string = undefined;
  onTheFlyLoadedPhone: string = undefined;

  constructor() {
  }

  ngOnInit() {
    if (this.initialValue) {
      const {upFrontPhone, onTheFlyPhone} = this.initialValue;
      this.upfrontLoadedPhone = upFrontPhone;
      this.onTheFlyLoadedPhone = onTheFlyPhone;
    }
  }

  upFrontChanged(event: FormChangedEvent<string>): void {
    const {data} = event;
    this.upfrontLoadedPhone = data;
    this.handleFormChanged();
  }

  onTheFlyChanged(event: FormChangedEvent<string>): void {
    const {data} = event;
    this.onTheFlyLoadedPhone = data;
    this.handleFormChanged();
  }

  handleFormChanged(): void {
    let event = new FormChangedEvent<FormData>();
    if (this.isFormValid()) {
      event = new FormChangedEvent<FormData>({
        valid: true,
        data: new FormData({
          onTheFlyPhone: this.onTheFlyLoadedPhone,
          upFrontPhone: this.upfrontLoadedPhone,
        })
      });
    }
    this.formChanged.emit(event);
  }

  isFormValid(): boolean {
    return true;
  }

}
