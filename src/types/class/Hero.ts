export class Hero {
    gender: string = '';
    birth_year: string = '';
    height: number = 0;
    mass: number = 0;
    hair_color: string = '';
    name: string = '';

    constructor(hero?: Hero){
        if(hero){
            this.birth_year = hero.birth_year;
            this.gender = hero.gender;
            this.hair_color = hero.hair_color;
            this.height = hero.height;
            this.mass = hero.mass;
            this.name = hero.name;
        }
    }
}