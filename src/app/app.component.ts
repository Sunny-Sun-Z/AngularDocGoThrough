import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Hero } from './hero';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Template Syntax';
  heroes: Hero[] = [];
  hero!: Hero;
  currentHero!: Hero;
  heroImageUrl = 'assets/images/hero.svg';

  isUnchanged = false;
  isSpecial = true;

  clicked = '';

  name: string = Hero.heroes[0].name || "";
  help = '';

  iconUrl = 'assets/images/ng-logo.svg';
  villainImageUrl = 'assets/images/villain.svg';

  canSave = true;
  clickMessage=''
  clickMessage2 = '';
  fontSizePx = 16;

  currentClasses: Record<string, boolean> = {};

  ngOnInit(): void {
    this.heroes = Hero.heroes.map(h => h.clone());
    this.currentHero = this.heroes[0];
    this.resetHeros();
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  resetHeros() {
    this.hero = this.currentHero;
  }

  getVal(): number {
    return 2;
  }

  deleteHero(hero?: Hero) {
    this.alert(`Delete hero: ${hero ? hero.name : 'the hero'}.`)
  }
  alert(msg?: string) {
    window.alert(msg);
  }
  // onSave(event?:MouseEvent){
  //   const eventMsg = event ? 'Event target is button ' + (event.target as HTMLElement).textContent : ''
  //   this.alert('Saved. ' + eventMsg);
  //   if(event) {event.stopPropagation()}; 
  // }

  onSave(event?: MouseEvent) {
    console.log('eee', event);
    const msg = event ? 'The event target is ' + (event.target as HTMLElement).textContent : '';
    this.alert('Saved. ' + msg);
    if (event) { event.stopPropagation() };
  }

  onSubmit(data: any) {/* referenced but not used */ }

  onClickMe(event?: MouseEvent) {
    const evtMsg = event ? ' Event target class is ' + (event.target as HTMLElement).className : '';
    this.alert('Click me.' + evtMsg);
  }

  updateCurrentHeroName(event: Event)
  {
     event? this.currentHero.name = (event.target as any).value: this.currentHero.name="";  
  }

  setUppercaseName(name: string)
  {
    this.currentHero.name = name.toUpperCase();
  }

  setCurrentClasses(){
    this.currentClasses = {
      savable: this.canSave,
      modified: this.isUnchanged,
      special: this.isSpecial
    }
  }

  currentStyles: Record<string, string> = {};
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }

  isActive = true;

  get nullHero() : Hero | null {return null;}

  heroesNoTrackByCount   = 0;
  heroesWithTrackByCount = 0;
  heroesWithTrackByCountReset = 0;
  trackByHeroes(index: number, hero: Hero): number { return hero.id; }

  resetHeroes() {
    this.heroes = Hero.heroes.map(hero => hero.clone());
    this.currentHero = this.heroes[0];
    this.hero = this.currentHero;
    this.heroesWithTrackByCountReset = 0;
  }

  
  changeIds() {
    this.resetHeroes();
    this.heroes.forEach(h => h.id += 10 * this.heroIdIncrement++);
    this.heroesWithTrackByCountReset = -1;
  }
  heroIdIncrement = 1;
  clearTrackByCounts() {
    const trackByCountReset = this.heroesWithTrackByCountReset;
    this.resetHeroes();
    this.heroesNoTrackByCount = -1;
    this.heroesWithTrackByCount = trackByCountReset;
    this.heroIdIncrement = 1;
  }


  @ViewChildren('noTrackBy')   heroesNoTrackBy!: QueryList<ElementRef>;
  @ViewChildren('withTrackBy') heroesWithTrackBy!: QueryList<ElementRef>;
  ngAfterViewInit() {
    // Detect effects of NgForTrackBy
    trackChanges(this.heroesNoTrackBy,   () => this.heroesNoTrackByCount++);
    trackChanges(this.heroesWithTrackBy, () => this.heroesWithTrackByCount++);
  }
trackById(index: number, item: any): number { return item.id; }

  callPhone(value:string) {this.alert(`Calling phone ${value} ...`)}

}
// helper to track changes to viewChildren
function trackChanges(views: QueryList<ElementRef>, changed: () => void) {
  let oldRefs = views.toArray();
  views.changes.subscribe((changes: QueryList<ElementRef>) => {
      const changedRefs = changes.toArray();
      // Check if every changed Element is the same as old and in the same position
      const isSame = oldRefs.every((v, i) => v.nativeElement === changedRefs[i].nativeElement);
      if (!isSame) {
        oldRefs = changedRefs;
        // wait a tick because called after views are constructed
        setTimeout(changed, 0);
      }
  });
}