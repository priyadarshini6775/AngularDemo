import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-date',
  templateUrl: './view-date.component.html',
  styleUrls: ['./view-date.component.scss']
})
export class ViewDateComponent implements OnInit {

  today: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
