import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroPageComponent } from './heroes/pages/hero-page/hero-page.component';
import { HeroReactiveComponent } from './heroes/pages/hero-reactive/hero-reactive.component';
import { ReqresComponent } from './reqres/pages/reqres/reqres.component';
import { FirstGuard } from './shared/guards/first.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';

const routes: Routes = [
  {path: 'customers', loadChildren: () =>  import('./customers/customers.module').then(
    mod => mod.CustomersModule )
  },
  {path: 'heroes', component: HeroPageComponent, canActivate: [FirstGuard]},
  {path: 'hero-reactive/:id', component: HeroReactiveComponent},
  {path: 'reqres', component: ReqresComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo:"welcome", pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
