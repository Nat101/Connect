import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

//services
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	constructor(
		public authService: AuthService,
		public userService: UserService
	) { }

	ngOnInit(){
		this.userService.ReadUserProfile().then(result => {
			result.subscribe(result => {
				//profile exisits
				if (result.length > 0){
					this.profileData = result[0].payload.doc.data();
					this.profileDocID = result[0].payload.doc.id;
				}
				//no profile
				else{
					console.log("Error, no profile found");
				}
			})
		})
	}
	
	profileData;
	profileDocID;
		
	//Form for changing user defined profile fields
	profileForm = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		birthday: new FormControl('')
	})
	
	//Button pressed to update user profile, send new values and docID to user service
	//TO FIX: Blank form spaces currently override existing data!!!
	onUpdateProfile (profileForm) {
		this.userService.UpdateUserProfile(this.profileDocID, profileForm);
	}


}
