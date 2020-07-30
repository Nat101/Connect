import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

//firebase
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	
	constructor(
		public router: Router,
		public afAuth: AngularFireAuth, 
		public afStore: AngularFirestore
	){}
	
	
	// Log in with Google
	GoogleAuth() {
		return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
		.then( (result) => {			
			this.router.navigate(['user_dashboard']);
		})
	}
	
	
	//Log out
	LogOut(){
		return this.afAuth.signOut()
		.then(() => {
			this.router.navigate(['login']);
		})
	}
	
}