import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { BackendService } from './core/backend/backend.service';

import { EventBusService } from './core/event-bus/event-bus.service';
import { UtilityService } from './core/utility/utility.service';
import { ErrorHandlerService } from './core/error-handler/error-handler.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

	constructor(
		private router: Router,
		private backendService: BackendService,
		private eventBusService: EventBusService,
		private errorHandlerService: ErrorHandlerService,
		private utilityService: UtilityService,
	) {
		this.eventBusService.changeSharedOptions.subscribe(
			(options) => this.updateSharedOptions(options)
		);
		this.router.events.subscribe(
			(event) => {
				if(event instanceof NavigationStart) {
					this.eventBusService.emitChangeRoute(event.url);
				}
			}
		);
	}

	isSmallDevice(): boolean {
		return this.utilityService.isSmallDevice();
	}

	updateSharedOptions(options) {
		
	}

	ngOnInit() {
		this.eventBusService.emitTranslate({});
	}
}
