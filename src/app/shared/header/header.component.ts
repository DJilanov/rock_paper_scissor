import { Component } from '@angular/core';

import { EventBusService } from '../../core/event-bus/event-bus.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	search = false;
	activeTab = 'home';

	constructor(
		private eventBusService: EventBusService,
	) {
		this.eventBusService.changeRoute.subscribe(
			(route) => this.makeActiveTab(route.replace('/', ''))
		);
	}

	makeActiveTab(tab) {
		this.activeTab = tab;
	}
}
