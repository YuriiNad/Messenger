import { AfterContentChecked, AfterViewChecked, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { ChatService } from 'src/app/service/chat.service';
@Component({
	selector: 'app-messenger',
	templateUrl: './messenger.component.html',
	styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit, AfterContentChecked {
	public displayName!: Observable<string>;

	constructor(
		public _auth: AuthService,
		private _chat: ChatService,
	) {

	}

	signOut() {
		this._auth.signOut();
	}
	ngOnInit(): void {
		// this.displayName = 'TestUser'
	}
	ngAfterContentChecked() {
		this.displayName = this._chat.displayName
	}
}
