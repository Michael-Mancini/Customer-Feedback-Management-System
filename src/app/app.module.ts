import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { FeedbackService } from './services/feedback.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';

const appRoutes:Routes = [
  {path:'', component:DashboardComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'add-new', component:AddNewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FeedbackComponent,
    AddNewComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'ccorganize'),
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [AngularFireDatabase, AngularFireDatabaseModule, FeedbackService, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
