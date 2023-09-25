import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-detail',
  inputs: ['hero'],
  outputs: ['deleteRequest'],
  template: `
    <div>
      <img src="{{heroImageUrl}}" alt="{{hero.name}}">
      <span [style.text-decoration]="lineThrough">{{prefix}} {{hero.name}}</span>
      <button type="button" (click)="delete()">DeleteMe</button>
    </div>


  `,
  styles: ['button {margin-left: 8px} div {margin: 8px 0} img {height:24px}']
})

export class HeroDetailComponent {
  heroImageUrl = 'assets/images/hero.svg';
  hero = new Hero (-1, 'zzzz');
  lineThrough = '';
  @Input() prefix='';

  deleteRequest = new EventEmitter<Hero>();

  delete(){
    this.deleteRequest.emit(this.hero);
    this.lineThrough = this.lineThrough ? '': 'line-through';
  }
}


@Component ({
  selector: 'app-big-hero-detail',
  template: `
    <div class="detail">
      <img src="{{heroImageUrl}}" alt="{{hero.name}}">
      <div><b>{{hero.name}}</b></div>
      <div>Emotion: {{hero.emotion}}</div>
      <div>BirthDate: {{hero.birthdate}}</div>
      <div>Web: <a href="{{hero.url}}" target="_blank">{{hero.url}}</a></div>
      <div>Rate/hr: {{hero.rate | currency:'EUR'}}</div>
      <br clear="all">
      <button type="button" (click)="delete()">Delete Big</button>
    </div>
  `,
  styles: [`
  .detail { border: 1px solid black; padding: 4px; max-width: 450px; }
  img     { float: left; margin-right: 8px; height: 100px; }
`]
})

export class BigHeroDetailComponent extends HeroDetailComponent {
  @Input() override hero!: Hero;
  @Output() override deleteRequest = new EventEmitter<Hero>(); 
}