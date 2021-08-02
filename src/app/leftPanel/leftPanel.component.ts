import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-leftPanel',
  templateUrl: './leftPanel.component.html',
  styleUrls: ['./leftPanel.component.css']
})
export class LeftPanelComponent implements OnInit {
  @Output() generateNew = new EventEmitter<boolean>();
  constructor() { }
  public generateWorkout(){
    this.generateNew.emit();
  }
  ngOnInit() {
  }

}
