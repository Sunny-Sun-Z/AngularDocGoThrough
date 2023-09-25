import { publishFacade } from "@angular/compiler";

export class Hero{
    static nextId = 0;

    static heroes: Hero[]=[
        new Hero(
            0,
            'Andy',
            'Happy',
            new Date('08/19/2004'),
            'https://www.imdb.com/title/tt0065832'
        ),
        new Hero(1, 'Lianhe','More happy'),
        new Hero(2, 'Shufang', 'cool'),
        new Hero(3, 'Shujie', 'confident'),
        new Hero(4, 'Shuhui',)
    ]
    constructor(
        public id = Hero.nextId,
        public name?:string,
        public emotion?: string,
        public birthdate?: Date,
        public url?: string,
        public rate = 100
    ){}
   
    clone(): Hero {
        return Object.assign(new Hero, this)
    }

}