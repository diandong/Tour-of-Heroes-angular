import { Component, OnInit } from '@angular/core';
// 导入新建的hero.ts
import { Hero } from '../hero';
//导入HeroService,私有化，添加到构造函数
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',//'app-heroes'是相匹配的标识父组件模板内此组件的HTML元素的名称。
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
// 始终export组件类，所以你可以import在其他地方
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  // 将heroService类型的私有参数添加HeroService到构造函数
  constructor(private heroService: HeroService) { }

  // 该ngOnInit()是一个生命周期挂钩。ngOnInit()创建组件后不久，Angular调用。这是放置初始化逻辑的好地方
  ngOnInit() {
    this.getHeroes()
  }
  //原始
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  //可观察
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
