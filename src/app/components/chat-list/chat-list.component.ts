import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ChatUser } from 'src/app/models/chatUser.model';
import { ChatService } from 'src/app/service/chat.service';

@Component({
	selector: 'app-chat-list',
	templateUrl: './chat-list.component.html',
	styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
	public staticUsers!: ChatUser[];

	constructor(
		private _chat: ChatService,
	) {

	}

	ngOnInit(): void {
		this.staticUsers = [
			{ id_u: 'Rachel', initials_u: 'Rachel Green-Geller', img_u: '../../../assets/img/Rachel\ Green-Geller.jpg', lastMessage_u: this._chat.getLastMessage('Rachel Green-Geller'), timeSent_u: this._chat.getLastMessageSentTime('Rachel Green-Geller') },
			{ id_u: 'Monica', initials_u: 'Monica Geller-Bing', img_u: '../../../assets/img/Monica\ Geller-Bing.jpg', lastMessage_u: this._chat.getLastMessage('Monica Geller-Bing'), timeSent_u: this._chat.getLastMessageSentTime('Monica Geller-Bing') },
			{ id_u: 'Phoebe', initials_u: 'Phoebe Buffay-Hannigan', img_u: '../../../assets/img/Phoebe\ Buffay-Hannigan.jpg', lastMessage_u: this._chat.getLastMessage('Phoebe Buffay-Hannigan'), timeSent_u: this._chat.getLastMessageSentTime('Phoebe Buffay-Hannigan') },
			{ id_u: 'Joey', initials_u: 'Joey Tribbiani', img_u: '../../../assets/img/Joey\ Tribbiani.jpg', lastMessage_u: this._chat.getLastMessage('Joey Tribbiani'), timeSent_u: this._chat.getLastMessageSentTime('Joey Tribbiani') },
			{ id_u: 'Chandler', initials_u: 'Chandler Bing', img_u: '../../../assets/img/Chandler\ Bing.jpg', lastMessage_u: this._chat.getLastMessage('Chandler Bing'), timeSent_u: this._chat.getLastMessageSentTime('Chandler Bing') },
			{ id_u: 'Ross', initials_u: 'Ross Geller', img_u: '../../../assets/img/Ross\ Geller.jpg', lastMessage_u: this._chat.getLastMessage('Ross Geller'), timeSent_u: this._chat.getLastMessageSentTime('Ross Geller') },
		]
	}
}
