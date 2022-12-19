import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService1 {
  activatedEmitter = new EventEmitter<boolean>();
}
