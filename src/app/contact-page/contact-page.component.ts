import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventBusService } from '../core/event-bus/event-bus.service';

const sharredOptions = {
	search: false
};

@Component({
	selector: 'app-contact-page',
	templateUrl: './contact-page.component.html',
	styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

	constructor(
		private eventBusService: EventBusService
	) {
		this.eventBusService.emitChangeSharedOptions(sharredOptions);
	}
	
	ngOnInit() {
		this.eventBusService.emitTranslate({});
	}
}
