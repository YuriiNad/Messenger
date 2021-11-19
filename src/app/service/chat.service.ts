import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import firebase from 'node_modules/firebase/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Message } from '../models/message.model';
import { ShareService } from './share.service';
import { catchError, map, take, takeLast } from 'rxjs/operators';
import { ChuckNorrisRespService } from './chuck-norris-resp.service';



@Injectable({
	providedIn: 'root'
})
export class ChatService {
	private staticMessageValue!: string

	private user!: firebase.User

	private sendToStaticUser!: string;
	private sendToStaticUserImg!: string;

	public displayName!: string; // it was Observable<string>

	public chatMessages!: AngularFireList<any>
	public chatMessage!: Message;

	public lastMessage!: Observable<any>;

	constructor(
		private _share: ShareService,
		private _auth: AuthService,
		private _http: HttpClient,
		private _afAuth: AngularFireAuth,
		private _db: AngularFireDatabase,
		private _resp: ChuckNorrisRespService,
	) {
		this._afAuth.authState
			.subscribe(auth => {
				if (auth !== undefined && auth !== null) {
					this.user = auth;

					this.getUser().subscribe((a: any) => {
						this.displayName = a.displayName
					})
				}
			});

		// takes default StaticUserNAme
		this.getStaticUserData();
	}

	getUser() {
		const displayName = this.user.displayName;
		const path = `/users/${displayName}`;

		return this._db.object(path).valueChanges();
	}

	getLastMessage(person: string): Observable<string> {
		const displayName = this.user.displayName;
		// const displayName = 'TestUser';
		return this._db
			.list<Message>(`/chats/${displayName}/${person}`)
			.valueChanges()
			.pipe(
				map<Message[], string>((messages: Message[]): string | any => {
					if (messages.length > 0) {
						const lastMesage = messages[messages.length - 1].message

						return lastMesage
					} else {
						const lastMesage = 'No messages yet'
						return lastMesage
					}
				})
			)
	}

	getLastMessageSentTime(person: string): Observable<string> {
		const displayName = this.user.displayName;
		// const displayName = 'TestUser';
		return this._db
			.list<Message>(`/chats/${displayName}/${person}`)
			.valueChanges()
			.pipe(
				map<Message[], string>((messages: Message[]): string | any => {
					if (messages.length > 0) {
						const sentTime = messages[messages.length - 1].timeSent
						return sentTime
					} else {
						const sentTime = null
						return sentTime
					}
				}),
				catchError((error: any): Observable<any> => {
					return throwError(`Error: ${error.message}`)
				})
			);
	}

	sendMessage(msg: string) {
		const displayName = this.user.displayName;
		const timeSent = this.getTimeStamp()

		const realUserMessage = {
			userName: displayName,
			message: msg,
			isRealUser: true,
			timeSent: timeSent,
		}

		this.chatMessages = this.getMessages();
		this.chatMessages.push(realUserMessage);
	}

	sendStaticMessage() {
		this._resp.staticUserResponse()
			.subscribe(
				(resp: string) => {
					this.staticMessageValue = resp;
				}),

			// delaying of user's static message creation
			setTimeout(() => {
				if (this.staticMessageValue != undefined && this.staticMessageValue != null) {
					const displayName = this.sendToStaticUser;
					const timeSent = this.getTimeStamp();

					const staticUserMessage = {
						userName: displayName,
						message: this.staticMessageValue,
						isRealUser: false,
						timeSent: timeSent,
					};

					this.chatMessages = this.getMessages();
					this.chatMessages.push(staticUserMessage);
				}

			}, 5000);

	}

	getMessages(): AngularFireList<Message[]> {
		const displayName = this.user.displayName;
		const sendToStaticUser = this.sendToStaticUser;

		return this._db.list(`/chats/${displayName}/${this.sendToStaticUser}`);
	}

	// Gets Static User's name;
	getStaticUserData() {
		this._share.sendUserName.subscribe((staticUserName: string) => {
			this.sendToStaticUser = staticUserName;
		})

		this._share.sendUserImg.subscribe((staticUserImg: string) => {
			this.sendToStaticUserImg = staticUserImg;
		})
	}

	// Sent Time for message
	getTimeStamp() {
		const now = new Date();
		const date = now.getUTCFullYear() + '/' +
			(now.getUTCMonth() + 1) + '/' +
			now.getUTCDate();
		const time = now.getHours() + ':' +
			now.getUTCMinutes()
		return (date + ' ' + time);
	}

}
