import { Observable } from "rxjs";

export class ChatUser {
	id_u?: string | number | null;
	initials_u?: string | null;
	img_u?: string | any;
	lastMessage_u?: Observable<string>;
	timeSent_u?: Observable<string>;
}