import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import firebase from 'node_modules/firebase/compat';
import { from, Observable } from 'rxjs';
import { ChatUser } from '../models/chatUser.model';
import { User } from '../models/user.model';
import { ChatService } from './chat.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	authUser!: Observable<User>;
	isLogged: boolean = false;

	constructor(
		private router: Router,
		public _afAuth: AngularFireAuth,
		private _db: AngularFireDatabase,
	) {

		this._afAuth.authState
			.subscribe(auth => {
				if (auth !== undefined && auth !== null) {
					this.isLogged = true

					this.addUser(auth.uid, auth.displayName, auth.email)

					setTimeout(() => {
						this.router.navigate(['/chat'])
					}, 700);

				} else {
					console.log('you have to log in');
				}
			})
	}

	addUser(uid: string | null, displayName: string | null, email: string | null): void {
		const path = `users/${displayName}`;
		const itemRef = this._db.object(path);
		const authUser = {
			uid: uid,
			email: email,
			displayName: displayName,
		}

		itemRef.set(authUser);
	}

	signIn(): Observable<Object> {
		const googleAuthProvideer = new firebase.auth.GoogleAuthProvider();
		const user = from(this._afAuth.signInWithPopup(googleAuthProvideer))
		return user;
	}

	signOut(): void {
		this._afAuth.signOut()
	}

}




