import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  events: string[] = [];
  opened: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
