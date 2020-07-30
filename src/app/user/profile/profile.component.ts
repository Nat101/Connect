import { Component, OnInit } from '@angular/core';

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

	ngOnInit(): void {
	}

}
