import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CategoryComponent } from './Components/category/category.component';
import { ChickensComponent } from './Components/chickens/chickens.component';
import { ShrimpsComponent } from './Components/shrimps/shrimps.component';
import { MeatComponent } from './Components/meat/meat.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    component: HomeComponent,
    title: 'Welcome to Cuts'
  },

  {
    path: 'category',
    component: CategoryComponent,
    title: 'Products',
    children: [
      { path: 'meat', component: MeatComponent, title: 'Meat Products' },
      { path: 'chick', component: ChickensComponent, title: 'Chicken Products' },
      { path: 'shrim', component: ShrimpsComponent, title: 'Shrimp Products' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
