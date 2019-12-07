import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  //{ path: 'home', loadChildren:  './home/home.module#HomePageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }, 
  { path: 'registrobefore', loadChildren: './registrobefore/registrobefore.module#RegistrobeforePageModule' },
  { path: 'registrouser', loadChildren: './registrouser/registrouser.module#RegistrouserPageModule' },
  { path: 'registropark', loadChildren: './registropark/registropark.module#RegistroparkPageModule' },
  { path: 'adminhome', loadChildren: './adminhome/adminhome.module#AdminhomePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
