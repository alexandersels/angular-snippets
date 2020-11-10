import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { delay } from 'rxjs/operators';

@Injectable()
export class UsersService {

  users = [
    new User({ lastname: 'Andy', firstname: 'Middleton' }),
    new User({ lastname: 'Maya', firstname: 'Odonnell' }),
    new User({ lastname: 'Jazmyn', firstname: 'Watson' }),
    new User({ lastname: 'Hakim', firstname: 'Britt' }),
    new User({ lastname: 'Kacy', firstname: 'Spence' }),
    new User({ lastname: 'Zach', firstname: 'Frame' }),
    new User({ lastname: 'Ishmael', firstname: 'Carpenter' }),
    new User({ lastname: 'Theodore', firstname: 'Foreman' }),
    new User({ lastname: 'Jordanna', firstname: 'Peck' }),
    new User({ lastname: 'Gene', firstname: 'Barker' }),
  ];

  findAll(): Observable<User[]> {
    return of(this.users)
      .pipe(
        delay(3000)
      );
  }
}
