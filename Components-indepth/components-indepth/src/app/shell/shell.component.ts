import { Component, ContentChild, ElementRef, OnInit,AfterContentInit, AfterViewInit  } from '@angular/core';
import { ViewDateComponent } from '../view-date/view-date.component';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, AfterContentInit {

  @ContentChild('appHeader') headerElement: ElementRef;
  @ContentChild(ViewDateComponent) viewDateComponent : ViewDateComponent;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterContentInit(){
    //console.log('from shell ' + this.headerElement.nativeElement);
    console.log('fromm shell ' + this.viewDateComponent.today);
  }

}
