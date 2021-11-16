import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { ChatUser } from 'src/app/models/chatUser.model';
import { Message } from 'src/app/models/message.model';
import { ChatService } from 'src/app/service/chat.service';
import { ShareService } from 'src/app/service/share.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, DoCheck {
	public lastMessage!: Message;
	public searchUser = '';
	@Input() staticUsers!: ChatUser[];

	constructor(
		private _share: ShareService,
		private _chat: ChatService,
		private _db: AngularFireDatabase,
	) {

	}

	ngOnInit(): void {

	}

	selectChat(person: any, img: any) {
		this._share.getSendToUser(person, img);
	}

	ngDoCheck() {
		this._share.sendSearchUser.subscribe((searchUser: string) => this.searchUser = searchUser)
	}


}

