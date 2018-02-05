import { Component } from '@angular/core';

import { UtilityService } from '../../core/utility/utility.service';
import { EventBusService } from '../../core/event-bus/event-bus.service';

import { ResultModel } from '../../models/result.model';


@Component({
	selector: 'app-score-panel',
	templateUrl: './score-panel.component.html',
	styleUrls: ['./score-panel.component.scss']
})

export class ScorePanelComponent {

	public score: ResultModel = new ResultModel();;

	constructor(
		private utilityService: UtilityService,
		private eventBusService: EventBusService
	) {
		this.updateScore();
		this.eventBusService.processedResult.subscribe(() => this.updateScore());
	}

	private updateScore() {
		this.score = this.utilityService.getResult();
	}

	public isFirstGame(): boolean {
		return isNaN(this.getRate()) && this.score.ties === 0;
	}

	public getRate(): number {
		return this.score.wins / (this.score.wins + this.score.loses);
	}
}
