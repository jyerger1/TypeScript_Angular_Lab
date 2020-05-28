import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private personArr: Person[] = [new Person('Andrew', 'Yerger')];

  // myPerson: Person = new Person("Andrew", "Yerger");

  constructor() {}

  getPerson(): Person[] {
    return this.personArr;
  }
}
