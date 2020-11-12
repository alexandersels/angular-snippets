import {Component, OnInit} from '@angular/core';
import {FormChangedEvent} from '../../shared/events/form-changed.event';
import {FormData} from '../models/form-data.model';

@Component({
  selector: 'app-smart-form-component-page',
  templateUrl: './smart-form-component-page.component.html',
  styleUrls: ['./smart-form-component-page.component.scss']
})
export class SmartFormComponentPageComponent implements OnInit {

  isFormDataValid = true;
  formData: FormData = undefined;

  startData = new FormData({
    upFrontPhone: '0',
  });

  constructor() {
  }

  ngOnInit() {
  }

  onFormChanged(event: FormChangedEvent<FormData>): void {
    const {valid, data} = event;
    this.isFormDataValid = valid;
    this.formData = data;
    console.log(event);
  }
}
