import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'node_modules/firebase/compat';
import { from, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	authUser!: User;

	constructor(
		public _afAuth: AngularFireAuth,
		private _db: AngularFireDatabase,
	) {

		this._afAuth.authState
			.subscribe(auth => {
				if (auth !== undefined && auth !== null) {

					//adds user to database
					this.addUser(auth.uid, auth.displayName, auth.email)
				}
			})
	}

	addUser(uid: string | null, displayName: string | null, email: string | null): void {
		const path = `users/${displayName}`;
		const itemRef = this._db.object(path);

		this.authUser = {
			uid: uid,
			email: email,
			displayName: displayName,
		}

		itemRef.set(this.authUser);
	}

	signIn(): Observable<any> {
		const googleAuthProvideer = new firebase.auth.GoogleAuthProvider();
		const user = from(this._afAuth.signInWithPopup(googleAuthProvideer))
		return user;
	}

	signOut(): void {
		this._afAuth.signOut()
	}
}




