import { Component } from '@angular/core';

import { EventBusService } from '../../core/event-bus/event-bus.service';

@Component({
	selector: 'app-battle-panel',
	templateUrl: './battle-panel.component.html',
	styleUrls: ['./battle-panel.component.scss']
})

export class BattlePanelComponent {

	public result: number;
	public userChoice: number;
	public computerChoice: number;

	constructor(
		private eventBusService: EventBusService
	) {
		this.eventBusService.processedResult.subscribe((eventData) => this.onProcessedResult(eventData));
	}

	public onProcessedResult(eventData): void {
		this.result = eventData.result;
		this.userChoice = eventData.userChoice;
		this.computerChoice = eventData.computerChoice;
	}

	public playAgain(): void {
		this.eventBusService.emitPlayAgain({});
	}
}
