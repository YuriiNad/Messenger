import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareService } from 'src/app/service/share.service';

@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
	public staticUserImg!: string;

	@Input() allMessages!: Observable<any>;

	constructor(
		private _share: ShareService,
	) { }

	ngOnInit(): void {
		this.setStaticUser();
	}

	setStaticUser(): void {
		// sets staticUserImg
		this._share.sendUserImg.subscribe((img: string) => {
			this.staticUserImg = img;
		})
	}
}
