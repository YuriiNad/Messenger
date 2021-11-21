import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ChuckNorrisRespService {

	private url = 'https://api.chucknorris.io/jokes/random';

	constructor(
		private _http: HttpClient,
	) {
	}

	staticUserResponse(): Observable<any> {
		return this._http.get<string>(this.url)
			.pipe(
				map((resp: any): string => {
					return resp.value;
				}),
				catchError((error): any => {
					return throwError(`${error.message}`)
				})
			)

	}

}
