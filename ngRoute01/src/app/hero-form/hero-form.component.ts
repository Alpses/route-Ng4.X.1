import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];
 //id,name,power,alterEgo?
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
 
  submitted = false;
  myDefault = this.powers[2] ;
  onSubmit() { this.submitted = true; }
 
  newHero() {
    this.model = new Hero(42, '', '');
  }
  optionChange(_evt){
    console.log('optionChange Func:'+_evt);
  }
  constructor(){
  }
}