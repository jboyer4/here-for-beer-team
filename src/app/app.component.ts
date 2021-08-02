import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'yoga';
  public hasWorkout: boolean = false;
  constructor() { }
  ngOnInit() {
  }
  togglehasWorkout(){
    this.hasWorkout = !this.hasWorkout;
  }
}
