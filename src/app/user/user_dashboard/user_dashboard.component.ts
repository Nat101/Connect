import { Component, OnInit } from '@angular/core';

//services
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-user_dashboard',
	templateUrl: './user_dashboard.component.html',
	styleUrls: ['./user_dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

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
						this.userService.CreateUserProfile();//create profile
						this.ngOnInit(); //restart initialization
					}
				})
			})
		}
			
		profileData;
		profileDocID;

}
