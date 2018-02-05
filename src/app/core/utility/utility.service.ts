import { Injectable } from '@angular/core';

import { ResultModel } from '../../models/result.model';

const choiceEnum = [
	"rock",
	"paper",
	"scissor"
];

@Injectable()
export class UtilityService {

	private result: ResultModel = new ResultModel();

	constructor() { }

	public processResult(userChoiceIndex, aiChoiceIndex): number {
		let mathResult = (3 + aiChoiceIndex - userChoiceIndex) % 3;
		if (!mathResult) {
		  ++this.result['ties'];
		} else if(1 == mathResult) {
		  ++this.result['loses'];
		} else {
		  ++this.result['wins'];
		}
		return mathResult;
	}

	public getResult() {
		return this.result;
	}

	public getRandomChoice(): number {
		return this.getRandomSmall();
	}
	/*
		This function is good only for 1 or 2 digit numbers.
	*/
	public getRandomSmall(): number {
		return Math.floor(Math.random() * Math.floor(choiceEnum.length));
	}
	/*
		This function should give you roughly the same number of 1-digit numbers as 2-digit numbers and as 3-digit numbers.
	*/
	public getRandomPowerwall(min: number, max: number): number {
		return Math.floor(Math.exp(Math.random()*(Math.log(max)-Math.log(min)))*min);
	}
}
