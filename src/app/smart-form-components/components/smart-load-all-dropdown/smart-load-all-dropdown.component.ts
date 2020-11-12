import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {debounceTime, tap} from 'rxjs/operators';
import {PhoneService} from '../../services/phone.service';
import {Phone} from '../../models/phone.model';
import {FormChangedEvent} from '../../../shared/events/form-changed.event';

@Component({
  selector: 'app-smart-load-all-dropdown',
  templateUrl: './smart-load-all-dropdown.component.html',
  styleUrls: ['./smart-load-all-dropdown.component.scss']
})
export class SmartLoadAllDropdownComponent implements OnInit, OnDestroy {

  @Input()
  initialValue: string;

  @Output()
  onSelected = new EventEmitter();

  form: FormGroup;
  filteredPhones: string[] = [];
  mappedPhones: string[] = [];
  phones: Phone[] = [];

  subscription = new Subscription();
  isLoading = true;

  constructor(private fb: FormBuilder,
              private phoneService: PhoneService) {
  }

  get phoneControl(): AbstractControl {
    return this.form.get('phone');
  }

  ngOnInit() {
    this.form = this.fb.group({
      phone: [{value: '', disabled: true}],
    });

    this.phoneService.findAll()
      .toPromise()
      .then((phones: Phone[]) => this.initialSetup(phones));

    this.subscription.add(this.phoneControl.valueChanges.pipe(
      debounceTime(300),
      tap((value) => this.filteredPhones = this.filterPhones(this.mappedPhones, value)),
      tap(() => this.handleFormChanged())
    ).subscribe());
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  filterPhones(phoneNumbers: string[], value: string): string[] {
    return phoneNumbers.filter(phoneNumber => phoneNumber.includes(value));
  }

  findIdFromLabel(label: string): string {
    const found = this.phones.find(phone => phone.number === label);
    if (found) {
      return found.id;
    }
    return undefined;
  }

  findLabelFromId(id: string): string {
    const found = this.phones.find(phone => phone.id === id);
    if (found) {
      return found.number;
    }
    return undefined;
  }

  handleFormChanged(): void {
    let event = new FormChangedEvent<string>();
    const {valid} = this.form;
    if (valid) {
      const {value} = this.phoneControl;
      const phoneId = this.findIdFromLabel(value);
      event = new FormChangedEvent<string>({
        valid: true,
        data: phoneId,
      });
    }
    this.onSelected.emit(event);
  }

  mapToLabels(phones: Phone[]): string[] {
    return phones.map(phone => phone.number);
  }

  initialSetup(phones: Phone[]): void {
    this.phones = phones;
    this.mappedPhones = this.mapToLabels(this.phones);
    this.filteredPhones = this.filterPhones(this.mappedPhones, '');

    // Disable spinner
    this.isLoading = false;

    // Enable phone control
    this.phoneControl.enable({emitEvent: false});

    // If initial value if present, set it
    if (this.initialValue) {
      const label = this.findLabelFromId(this.initialValue);
      this.phoneControl.setValue(label, {emitEvent: false});
    }
  }

}
