import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { LoginComponent } from './admin/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserDashboardComponent } from './user/user_dashboard/user_dashboard.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
const routes: Routes = [
	{ 
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{ 
		path: 'login',
		component: LoginComponent
	},
	{ 
		path: 'user_dashboard',
		component: UserDashboardComponent,
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToLogin }
	},
	{ 	path: 'user_profile',
		component: ProfileComponent,
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToLogin }
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
