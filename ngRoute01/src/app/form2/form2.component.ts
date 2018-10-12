import { Component, OnInit } from '@angular/core';

export interface User {
  name: string;
  account: {
    email: string;
    confirm: string;
  }
}

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  private arr :string[];
  private tips:string;
  private tip1:string =`<input [ngModel]="user.name" (ngModelChange)="user.name = $event" [innerHTML]="htmlSnippet">`;
  private tip2:string =`<input [(ngModel)]="user.name" [innerHTML]="htmlSnippet">`;
  public user:User = {
    name:'alpses',
    account: {
      email: 'alpses@cnooc.com',
      confirm: 'alpses@cnooc.com'
    }
  }
  private curContact={
    firstname:'John',
    lastname:'Fay',
    street:'Hexiang',
    zip:4000,
    city:'GZ'
  }
  constructor() {
    this.arr=['Template-Driven Forms - 模板驱动式表单','Reactive Forms - 响应式表单'];
    this.tips="若使用 template-driven 表单，则在@NgModel中导入 FormsModule；若使用 reactive forms，则@NgModel导入 ReactiveFormsModule。"
  }

  ngOnInit() {

  }
  onSbmit({value,valid}:{value:User,valid:boolean},ngsform){
    console.log(value,valid);//对象解构
    console.dir(ngsform)
  }
}
