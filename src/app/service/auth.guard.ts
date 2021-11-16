import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private _afAuth: AngularFireAuth,) {

	}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return new Promise((resolve, reject) => {
			this._afAuth.onAuthStateChanged((user) => {
				if (user) {
					resolve(true)
				} else {
					setTimeout(() => {
						this.router.navigate(['/entry']);
					}, 700);
				}
				resolve(false)
			})
		})
	}

}
