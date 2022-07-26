import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),

  },

  {
    path: 'category',
    pathMatch: 'full',
    loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),

  },
  {
    path: 'category/:slug',
    pathMatch: 'full',
    loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),

  },

  {
    path: 'package',
    pathMatch: 'full',
    loadChildren: () => import('./packages/packages.module').then(m => m.PackagesModule),

  },
  {
    path: 'package/:slug',
    pathMatch: 'full',
    loadChildren: () => import('./packages/packages.module').then(m => m.PackagesModule),

  },



  {
    path: 'colorful-rajasthan',
    pathMatch: 'full',
    loadChildren: () => import('./rajasthanpackage1/rajasthanpackage1.module').then(m => m.Rajasthanpackage1Module),

  },
  {
    path: 'amazing-rajasthan',
    pathMatch: 'full',
    loadChildren: () => import('./rajasthanpackage2/rajasthanpackage2.module').then(m => m.Rajasthanpackage2Module),
  },
  {
    path: 'rangilo-rajasthan',
    pathMatch: 'full',
    loadChildren: () => import('./rajasthanpackage3/rajasthanpackage3.module').then(m => m.Rajasthanpackage3Module),

  },
  {
    path: 'rajasthan-sandunes',
    pathMatch: 'full',
    loadChildren: () => import('./rajasthanpackage4/rajasthanpackage4.module').then(m => m.Rajasthanpackage4Module),

  },
  {
    path: 'rajasthan-ajmer-pushkar',
    pathMatch: 'full',
    loadChildren: () => import('./rajasthanpackage5/rajasthanpackage5.module').then(m => m.Rajasthanpackage5Module),

  },
  {
    path: 'rajasthan-ranthambore-jungle-safari',
    pathMatch: 'full',
    loadChildren: () => import('./rajasthanpackage6/rajasthanpackage6.module').then(m => m.Rajasthanpackage6Module),

  },
  {
    path: 'beautiful-udaipur',
    pathMatch: 'full',
    loadChildren: () => import('./rajasthanpackage7/rajasthanpackage7.module').then(m => m.Rajasthanpackage7Module),

  },
  //new packages

  {
    path: 'JK-tour-package01',
    pathMatch: 'full',
    loadChildren: () => import('./kashmirpackage1/kashmirpackage1.module').then(m => m.Kashmirpackage1Module),

  },
  {
    path: 'HP-tour-package01',
    pathMatch: 'full',
    loadChildren: () => import('./himachalpackage1/himachalpackage1.module').then(m => m.Himachalpackage1Module),

  },

  {
    path: 'login',
    component: LoginComponent
},




];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:false,onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
