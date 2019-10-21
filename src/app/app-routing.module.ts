import { NgModule } from '@angular/core';
// 导入路由模块
import { Routes, RouterModule } from '@angular/router';
// 路径
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// 设置路由
const routes: Routes = [
  // 设置URL空，默认指定路由
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  // forRoot()该元数据初始化路由器启动时，它监听浏览器位置的变化
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
