import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Phone } from '../models/phone.model';
import { delay } from 'rxjs/operators';

@Injectable()
export class PhonesService {
  phones = [
    new Phone({ number: '123456789' }),
    new Phone({ number: '112233445' }),
    new Phone({ number: '223344556' }),
    new Phone({ number: '334455667' }),
  ];

  findAll(): Observable<Phone[]> {
    return of(this.phones)
      .pipe(
        delay(3000)
      );
  }
}
