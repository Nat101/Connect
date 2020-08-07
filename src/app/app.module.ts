import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

//main
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

//components
import { LoginComponent } from './admin/login/login.component';
import { UserDashboardComponent } from './user/user_dashboard/user_dashboard.component';
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
		ReactiveFormsModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebaseConfig, 'connect'),
		AngularFireAuthModule,
		AngularFirestoreModule,
		AngularFireStorageModule
	],
	providers: [AngularFireAuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
