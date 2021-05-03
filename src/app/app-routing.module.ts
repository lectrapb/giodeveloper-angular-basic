import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PagesComponent } from './pages/pages.component';
import { GraphComponent } from './pages/graph/graph.component';

const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[

      {path:'dashboard', component:DashboardComponent},
      {path:'graph', component:GraphComponent},
      {path:'', redirectTo:'/dashboard', pathMatch:'full'}, 
    ]
  }, 
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'**' , component: NotFoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
