import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
	constructor(
		public _afAuth: AngularFireAuth,
		private router: Router,
	) {
	}

	ngOnInit(): void {
	}
	goBackTo(goTo: string): void {
		this.router.navigate([`/${goTo}`])
	}

}
