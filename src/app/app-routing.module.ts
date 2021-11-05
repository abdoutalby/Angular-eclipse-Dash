import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DevicesComponent } from './components/devices/devices.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { LoginComponent } from './components/login/login.component';


const routes :Routes=[
  {path:'/' , component: LoginComponent},
  {path:'login' , component: LoginComponent},
  {path:'devices' , component: DevicesComponent,canActivate:[AuthGuard]},
  {path:'users' , component: ItemsComponent ,canActivate:[AuthGuard]},
  {path:'home' , component: HomeComponent ,canActivate:[AuthGuard]},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


