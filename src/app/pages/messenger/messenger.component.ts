import { AfterContentChecked, AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { ChatService } from 'src/app/service/chat.service';
import { ShareService } from 'src/app/service/share.service';
@Component({
	selector: 'app-messenger',
	templateUrl: './messenger.component.html',
	styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit, AfterContentChecked, DoCheck {
	public displayName!: string; // it was Observable<string>
	public searchUser = '';
	@ViewChild('inputMenu') containerMenu!: ElementRef;
	constructor(
		public _auth: AuthService,
		private _chat: ChatService,
		private _share: ShareService,
	) {

	}
	ngOnInit(): void {

	}

	ngDoCheck() {
		this.setSearchUSer()
	}

	ngAfterContentChecked(): void {
		this.displayName = this._chat.displayName
	}

	signOut(): void {
		this._auth.signOut();
	}

	setSearchUSer(): void {
		this._share.setSearchUSer(this.searchUser);
	}
	closeMenu(): void {
		if (this.containerMenu.nativeElement.checked == true) {
			this.containerMenu.nativeElement.checked = false
		}
	}
}
