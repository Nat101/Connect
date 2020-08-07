//Connect/src/services/user.service.ts

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
	//This method creates a new user profile with data from their google login
	//Note: user defined data is initially set to the empty string/ null
	async CreateUserProfile(){
		await this.afAuth.onAuthStateChanged(user => {
			if (user){
				let newUser: User = {
					uid: user.uid,
					email: user.email,
					displayName: user.displayName,
					photoURL: user.photoURL,
					
					firstName: "",
					lastName: "",
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
	//This method gets the user profile data saved in the database
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
	
	// Update user profile
	//This method changes the user defined profile data in the database
	//Note it does not impact the google login defined data
	UpdateUserProfile(profileDocID, profileForm){
		console.log("user.service.ts: " ,profileDocID);
		return this.afStore
			.collection("UserProfiles")
			.doc(profileDocID)
			.set({ 
				firstName: profileForm.value.firstName, 
				lastName: profileForm.value.lastName,
				birthday: profileForm.value.birthday 
				}, { merge:true});
	}
	
}