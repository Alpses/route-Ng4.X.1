import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  private username : string ;
  private custom:string;
  private regname:string;
  private versions:string[];
  constructor() { }

  ngOnInit() {
      this.username = 'Semi' ;
      this.custom = 'John Buffer';
      this.regname = 'Ame Eagle';
      this.versions = ['1.x', '2.x', '3.x'];
  }
  getLog(_evt){
    console.log(_evt);
  }
  onSubmit(desc){
    console.dir(desc)
  }
  onSubmit2(par){
    console.log(par)
  }
}
