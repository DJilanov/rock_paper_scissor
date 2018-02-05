import { Component } from '@angular/core';

import { UtilityService } from '../core/utility/utility.service';
import { EventBusService } from '../core/event-bus/event-bus.service';

const sharredOptions = {
	search: false
};

@Component({
	selector: 'app-game-page',
	templateUrl: './game-page.component.html',
	styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent {
	
	public enableSelect: boolean = true;

	constructor(
		private utilityService: UtilityService,
		private eventBusService: EventBusService
	) {
		this.eventBusService.emitChangeSharedOptions(sharredOptions);
		this.eventBusService.playAgain.subscribe(() => this.onPlayAgain());
		this.eventBusService.userSelect.subscribe((eventData) => this.onUserSelect(eventData));
	}

	private onPlayAgain() {
		this.enableSelect = true;
	}

	private onUserSelect(eventData) {
		this.enableSelect = false;
		let userChoice = eventData.choice;
		let computerChoice = this.utilityService.getRandomChoice();
		// TODO: Save it at history
		let result = this.utilityService.processResult(userChoice, computerChoice);
		this.eventBusService.emitProcessedResult({
			result: result,
			userChoice: userChoice,
			computerChoice: computerChoice
		});
	}
}
