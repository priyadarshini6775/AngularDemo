import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDemo';
  toDay = Date.now();
  myName = "Peter Parker";
  money = 100;
  boxValue = "";
  myDisabled = true;
  show = true;
  myColor = 'blue';
  errFlag = true;
  myFav = "Bruce";
  myFavObj = {
    name:'Chans',
    age:40
  }
  myFavObjArray = [ {
    name:'Chans',
    age:40
  },
  {
    name:'Jim',
    age:37
  }
]


  dataArray = [
    {
      name:"Tony",
      age:27
    },
    {
      name:"Sony",
      age:29
    },
    {
      name:"Sam",
      age:26
    },
    {
      name:"Tim",
      age:24
    }
  ];

  getName(name){
    alert(name);
  }

  MyEvent(event){
    console.log(event);
  }
  getValue(value){
    this.boxValue = value;
    console.log(value);
  }
  EnableBox(){
    this.myDisabled = false;
     
  }
  getFormValues(value){
    console.log(value);
  }
  changeColor(){
    this.errFlag = !this.errFlag;
  }

  getDataFromChild(data){
    console.log(data);
  }

}
