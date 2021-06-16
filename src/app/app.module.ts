import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';

import { HeaderComponent } from './home/header/header.component';
import { FormularioRegistroComponent } from './formulario/formulario-registro/formulario-registro.component';
import { FormularioLoginComponent } from './formulario/formulario-login/formulario-login.component';
import { ProfileComponent } from './Usuario/profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarUserComponent } from './Usuario/navbar-user/navbar-user.component';
import { ListProfComponent } from './Listado/list-prof/list-prof.component';
import { ChangePasswordComponent } from './Usuario/change-password/change-password.component';
import { ChangeImgProfileComponent } from './Usuario/change-img-profile/change-img-profile.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    FormularioRegistroComponent,
    FormularioLoginComponent,
    ProfileComponent,
    NavbarComponent,
    NavbarUserComponent,
    ListProfComponent,
    ChangePasswordComponent,
    ChangeImgProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
