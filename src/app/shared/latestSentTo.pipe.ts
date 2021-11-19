import { Pipe, PipeTransform } from "@angular/core";
import { ChatUser } from "../models/chatUser.model";

@Pipe({
	name: 'lastSent'
})


export class LastSentPipe implements PipeTransform {
	transform(staticUsers: ChatUser[]): ChatUser[] {
		return staticUsers.sort((x: any, y: any) => +new Date(x.timeSent_u) - + new Date(y.timeSent_u)).reverse();
	}
}