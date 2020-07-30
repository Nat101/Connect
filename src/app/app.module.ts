import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

//components
import { LoginComponent } from './admin/login/login.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		UserDashboardComponent,
		ProfileComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebaseConfig, 'connect'),
		AngularFireAuthModule,
		AngularFirestoreModule,
		AngularFireStorageModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
