import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightPanel',
  templateUrl: './rightPanel.component.html',
  styleUrls: ['./rightPanel.component.css']
})
export class RightPanelComponent implements OnInit {
  @Input() showTable: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
