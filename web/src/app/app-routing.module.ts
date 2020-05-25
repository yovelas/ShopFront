import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ClassifyComponent } from './classify/classify/classify.component';
import { GoodsComponent } from './goods/goods.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'classify', component: ClassifyComponent },
  { path: 'goods', component: GoodsComponent },
  { path: 'lists', component: GoodsListComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
