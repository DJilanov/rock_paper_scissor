import { Component } from '@angular/core';

import { EventBusService } from '../../core/event-bus/event-bus.service';

@Component({
	selector: 'app-choice-panel',
	templateUrl: './choice-panel.component.html',
	styleUrls: ['./choice-panel.component.scss']
})

export class ChoicePanelComponent {

	constructor(
		private eventBusService: EventBusService
	) {
		
	}

	public select(choice) {
		this.eventBusService.emitUserSelect({
			choice: choice
		})
	}
}
