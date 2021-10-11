import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'node_modules/firebase/compat';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		public afAuth: AngularFireAuth

	) { }

	signIn(): void {
		const googleAuthProvideer = new firebase.auth.GoogleAuthProvider();
		this.afAuth.signInWithPopup(googleAuthProvideer)
	}

	signOut(): void {
		this.afAuth.signOut()
	}
}
