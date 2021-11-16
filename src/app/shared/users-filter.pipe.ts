import { Pipe, PipeTransform } from "@angular/core";
import { ChatUser } from "../models/chatUser.model";

@Pipe({
	name: 'userFilter'
})


export class UserFilterPipe implements PipeTransform {
	transform(staticUsers: ChatUser[], search: string = ''): ChatUser[] {
		if (!search.trim()) {
			return staticUsers
		}
		return staticUsers.filter(staticUser => {
			return staticUser.initials_u?.toLowerCase().indexOf(search.toLowerCase()) !== -1
		})
	}
}