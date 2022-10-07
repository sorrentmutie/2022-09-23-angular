import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent implements OnInit {

  hero = new Hero(1, 'Dr. Strange', 'Magia', 'Salvatore Sorrentino');
  powers = ["Magia", "Invisibilità", "Forza" ]
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.hero.name);
  }

}
