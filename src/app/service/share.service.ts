import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';
import { ChatListComponent } from '../components/chat-list/chat-list.component';

@Injectable({
	providedIn: 'root'
})
export class ShareService {
	private staticUserName = new BehaviorSubject<string>('Rachel Green-Geller');
	private staticUserImg = new BehaviorSubject<string>('../../../assets/img/Rachel\ Green-Geller.jpg');

	sendUserName = this.staticUserName.asObservable();
	sendUserImg = this.staticUserImg.asObservable();



	constructor(
		private _db: AngularFireDatabase,
	) {

	}


	getSendToUser(sendUsers: string, img: string) {
		this.staticUserName.next(sendUsers)
		this.staticUserImg.next(img)
	}


}
