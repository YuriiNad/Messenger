import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ShareService {
	private staticUserName = new BehaviorSubject<string>('Rachel Green-Geller');
	private staticUserImg = new BehaviorSubject<string>('../../../assets/img/Rachel\ Green-Geller.jpg');
	private staticSearchUser = new BehaviorSubject<string>('');



	sendUserName = this.staticUserName.asObservable();
	sendUserImg = this.staticUserImg.asObservable();
	sendSearchUser = this.staticSearchUser.asObservable();


	constructor(
		private _db: AngularFireDatabase,
	) {

	}
	setSearchUSer(searchUser: string) {
		this.staticSearchUser.next(searchUser)
	}

	getSendToUser(sendUsers: string, img: string) {
		this.staticUserName.next(sendUsers)
		this.staticUserImg.next(img)
	}


}
