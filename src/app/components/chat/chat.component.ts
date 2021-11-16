import { Component, OnInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/service/chat.service';
import { ShareService } from 'src/app/service/share.service';


@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
	public message!: string;

	public staticUserName!: string;
	public staticUserImg!: string;

	public allMessages!: Observable<Object>;
	public currentUsers!: any

	@ViewChild('scroller') private messagesContainer!: ElementRef

	constructor(
		private _share: ShareService,
		private _chat: ChatService,
	) {
		this.allMessages = this._chat.getMessages().valueChanges();
	}

	ngOnInit(): void {
		this.setStaticUser();
	}

	ngAfterViewChecked(): void {
		this.scrollToBottom();
	}

	sendMessage(): void {
		if (this.message != undefined && this.message.trim() != '') {
			this._chat.sendMessage(this.message);
			this._chat.sendStaticMessage();
		}

		this.message = '';
	}

	handSubmit(event: any): void {
		if (event.keyCode === 13 && this.message != undefined && this.message.trim() != '') {
			this.sendMessage()
		}
	}

	setStaticUser(): void {
		// sets staticUserName
		this._share.sendUserName.subscribe((staticUserName: string) => {
			this.staticUserName = staticUserName;

			// reloads Messages[] each time the staticUser is changed
			this.allMessages = this._chat.getMessages().valueChanges();
		})

		// sets staticUserImg
		this._share.sendUserImg.subscribe((img: string) => {
			this.staticUserImg = `url('${img}')`
		})
	}

	scrollToBottom(): void {
		this.messagesContainer.nativeElement.scrollTop
			= this.messagesContainer.nativeElement.scrollHeight;
	}




}
