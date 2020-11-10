import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Group } from '../models/group.model';
import { delay } from 'rxjs/operators';

@Injectable()
export class GroupsService {
  groups = [
    new Group({ name: 'Group One', type: 'DUO', users: [] }),
    new Group({ name: 'Group Two', type: 'HUNT', users: [] }),
    new Group({ name: 'Group Three', type: 'OVERFLOW', users: [] }),
  ];

  findAll(): Observable<Group[]> {
    return of(this.groups).pipe(
      delay(3000),
    );
  }
}
