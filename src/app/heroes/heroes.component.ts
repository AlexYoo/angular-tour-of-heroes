import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { User } from '../user';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { HotplaceService } from '../hotplace.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  // heroes = HEROES;
  heroes: Hero[];
  users: User[];

  // selectedHero: Hero;

  constructor(private heroService: HeroService, private hotplaceService: HotplaceService) { }

  ngOnInit() {
    this.getHeroes();
    this.getUsers();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   // console.dir(hero.name);
  // }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  getUsers(): void {
    // this.heroes = this.heroService.getHeroes();
    this.hotplaceService.getUsers()
      .subscribe(users => this.users = users);
  }

}
