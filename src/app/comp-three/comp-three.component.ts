import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.css'],
})
export class CompThreeComponent implements OnInit {
  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {}

  get dataList(): Person[] {
    return this.serviceService.getPerson();
  }
}
