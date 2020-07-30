import { Injectable } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';

import { User } from "../services/user";

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(
		public afAuth: AngularFireAuth,
		public afStore: AngularFirestore 
	){}
	
	
	// Create user profile
	async CreateUserProfile(){
		await this.afAuth.onAuthStateChanged(user => {
			if (user){
				let newUser: User = {
					uid: user.uid,
					email: user.email,
					displayName: user.displayName,
					photoURL: user.photoURL,
					
					firstName: null,
					lastName: null,
					birthday: null
				}
				return new Promise<any>((resolve, reject) => {
					this.afStore
					.collection("UserProfiles")
					.add(newUser)
					.then(res => {}, err => reject(err));
				})
			}
			else{
				console.log("Cannot create user profile- no user found.");
			}
		})
	}
	
	// Read user profile
	async ReadUserProfile(){
		let userID;
		await this.afAuth.onAuthStateChanged(user => {
			if (user){
				userID = user.uid;
			}
		})
		if (userID){
			return this.afStore
				.collection("UserProfiles", ref => ref.where("uid", "==", userID)) 
				.snapshotChanges()	
		}
					
	}
	
}