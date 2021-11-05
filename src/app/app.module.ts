import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './components/login/login.component';
import { ItemsComponent } from './components/items/items.component';
import { DeviceComponent } from './components/device/device.component';
import { UserComponent } from './components/user/user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { DevicesComponent } from './components/devices/devices.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { TokenInterceptorService } from './services/token-interceptor.service';

const routes :Routes=[
  {path:'login' , component: LoginComponent},
  {path:'' , component: LoginComponent},
  {path:'devices' , component: DevicesComponent},
  {path:'users' , component: ItemsComponent},
  {path:'home' , component: HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    LoginComponent,
    ItemsComponent,
    DeviceComponent,
    UserComponent,
    AddUserComponent,
    AddDeviceComponent,
    DevicesComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes ,{enableTracing:true})
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
