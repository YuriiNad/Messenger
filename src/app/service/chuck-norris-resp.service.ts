import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from '../models/message.model';
import { ChatService } from './chat.service';

@Injectable({
	providedIn: 'root'
})
export class ChuckNorrisRespService {

	private url = 'https://api.chucknorris.io/jokes/random';

	constructor(
		private _http: HttpClient,
	) {
	}
	staticUserResponse(): Observable<string> {
		return this._http.get<string>(this.url)
			.pipe(
				map((resp: any): string => {
					return resp.value
				})
			)
	}

}
