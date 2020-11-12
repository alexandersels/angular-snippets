import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {Phone} from '../../models/phone.model';
import {Observable} from 'rxjs';
import {PhoneService} from '../../services/phone.service';
import {debounceTime, startWith, switchMap, tap} from 'rxjs/operators';
import {FormChangedEvent} from '../../../shared/events/form-changed.event';

@Component({
  selector: 'app-smart-filter-dropdown',
  templateUrl: './smart-filter-dropdown.component.html',
  styleUrls: ['./smart-filter-dropdown.component.scss']
})
export class SmartFilterDropdownComponent implements OnInit {

  @Input()
  initialValue: string;

  @Output()
  onSelected = new EventEmitter();

  initialLoad = true;
  isLoading = true;

  form: FormGroup;
  filteredPhones$: Observable<Phone[]>;
  phones: Phone[] = [];

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

    this.filteredPhones$ = this.phoneControl.valueChanges.pipe(
      startWith(''),
      tap(() => this.isLoading = true),
      debounceTime(300),
      switchMap((value: string) => this.phoneService.findBy(value)),
      tap((phones: Phone[]) => {
          this.isLoading = false;
          if (this.initialLoad) {
            this.performInitialLoad(phones);
          } else {
            this.handleFormChanged();
          }
        }
      ));
  }

  handleFormChanged(): void {
    let event = new FormChangedEvent<string>();
    const {valid} = this.form;
    if (valid) {
      const {value} = this.phoneControl;
      event = new FormChangedEvent<string>({
        valid: true,
        data: value ? value.id : undefined,
      });
    }
    this.onSelected.emit(event);
  }

  displayFn(phone: Phone):
    string {
    if (phone) {
      return phone.number;
    }
  }

  performInitialLoad(phones: Phone[]): void {
    this.initialLoad = false;
    this.phoneControl.enable({emitEvent: false});
    if (this.initialValue) {
      const initial = phones.find(phone => phone.id === this.initialValue);
      this.phoneControl.setValue(initial, {emitEvent: false});
    }
  }
}
