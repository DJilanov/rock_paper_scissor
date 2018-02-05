import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations'

import { EventBusService } from '../../core/event-bus/event-bus.service';

declare var $: any;

@Component({
	selector: 'app-error-message',
	animations: [
		trigger('errorWindowSlide', [
			transition(':enter', [
				style({ transform: 'translateY(100%)' }),
				animate('300ms', style({ transform: 'translateY(0)' }))
			]),
			transition(':leave', [
				style({ transform: 'translateY(0)' }),
				animate('300ms', style({ transform: 'translateY(100%)' }))
			])
		])
	],
	templateUrl: './error-message.component.html',
	styleUrls: ['./error-message.component.scss']
})

export class ErrorMessageComponent {
	private retryCountMaxInterval = 10000;

	@Input() type: string = 'alert';
	@Input() customError: string = '';
	showErrorMessage = false;
	errorMessage = '';

	constructor(
		private eventBusService: EventBusService
	) {
		this.eventBusService.requestError.subscribe((data) => this.showError(data));
	}

	showError(data) {
		this.errorMessage = data.errorMessage;
		this.showErrorMessage = true;
	}

	hideError() {
		this.showErrorMessage = false;
	}
}
