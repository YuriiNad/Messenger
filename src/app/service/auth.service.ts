import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'node_modules/firebase/compat';
import { from, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		public afAuth: AngularFireAuth

	) { }

	signIn(): Observable<any> {
		const googleAuthProvideer = new firebase.auth.GoogleAuthProvider();
		const user = from(this.afAuth.signInWithPopup(googleAuthProvideer))
		return user;
	}

	signOut(): void {
		this.afAuth.signOut()
	}
}
