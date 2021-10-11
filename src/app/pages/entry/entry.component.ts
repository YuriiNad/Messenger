import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
	selector: 'app-entry',
	templateUrl: './entry.component.html',
	styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

	constructor(
		public _auth: AuthService,
	) { }

	ngOnInit(): void {
	}
	signIn() {
		this._auth.signIn()

	}
	signOut() {
		this._auth.signOut();
	}

}
