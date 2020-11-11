import { Injectable } from '@angular/core';
import { Phone } from '../models/phone.model';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class PhoneService {

  availablePhones: Phone[] = [
    new Phone({ id: '0', number: '050000000' }),
    new Phone({ id: '1', number: '050111111' }),
    new Phone({ id: '2', number: '050222222' }),
    new Phone({ id: '3', number: '050333333' }),
    new Phone({ id: '4', number: '050444444' }),
    new Phone({ id: '5', number: '050555555' }),
    new Phone({ id: '6', number: '050666666' }),
    new Phone({ id: '7', number: '050777777' }),
    new Phone({ id: '8', number: '050888888' }),
    new Phone({ id: '9', number: '050999999' }),
  ];

  findAll(): Observable<Phone[]> {
    return of(this.availablePhones)
      .pipe(
        delay(2000)
      );
  }

  findBy(phoneNumber: string): Observable<Phone[]> {
    return of(this.availablePhones)
      .pipe(
        map(phones => phones.filter(phone => phone.number.includes(phoneNumber))),
        delay(1000)
      );
  }
}
