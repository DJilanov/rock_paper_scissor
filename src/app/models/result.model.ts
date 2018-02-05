export class ResultModel {
	wins: number;
	loses: number;
	ties: number;


	constructor(
		wins?: number, 
		loses?: number, 
		ties?: number
	) {
		this.wins = wins || 0;
		this.loses = loses || 0;
		this.ties = ties || 0;
	}
}
