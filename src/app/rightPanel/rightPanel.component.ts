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
  showDetails(){
    alert("The pose has the head down, ultimately touching the floor, with the weight of the body on the palms and the feet. The arms are stretched straight forward, shoulder width apart; the feet are a foot apart, the legs are straight, and the hips are raised as high as possible");
  }
}
