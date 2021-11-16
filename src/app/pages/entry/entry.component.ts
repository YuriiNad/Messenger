import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ChatService } from 'src/app/service/chat.service';

@Component({
	selector: 'app-entry',
	templateUrl: './entry.component.html',
	styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

	constructor(
		public _chat: ChatService,
		public _auth: AuthService,
	) { }

	ngOnInit(): void {

	}

	signIn() {
		this._auth.signIn()
	}
}
