import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() hero ;
  @Input() heroObj;
  @Output() parentFunction : EventEmitter<any> = new EventEmitter();
 

  constructor() { }

  ngOnInit(): void {
  
  }

  sendDataToParent(){
    let userObj = {
      name: 'Tim',
      age: 40
    }
   this.parentFunction.emit(userObj);

  }

}
