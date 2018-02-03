import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

/**
 * @EventBusService used for connections between modules
 */
export class EventBusService {

	public playAgain: EventEmitter<any>;
	public translate: EventEmitter<any>;
	public userSelect: EventEmitter<any>;
	public changeRoute: EventEmitter<any>;
	public requestError: EventEmitter<any>;
	public changeLanguage: EventEmitter<any>;
	public processedResult: EventEmitter<any>;
	public changeSharedOptions: EventEmitter<any>;

	constructor() {
		this.playAgain = new EventEmitter();
		this.translate = new EventEmitter();
		this.userSelect = new EventEmitter();
		this.changeRoute = new EventEmitter();
		this.requestError = new EventEmitter();
		this.changeLanguage = new EventEmitter();
		this.processedResult = new EventEmitter();
		this.changeSharedOptions = new EventEmitter();
	}

	public emitPlayAgain(data) {
		this.playAgain.emit(data);
	}
	
	public emitTranslate(data) {
		this.translate.emit(data);
	}

	public emitUserSelect(data) {
		this.userSelect.emit(data);
	}
	

	public emitChangeRoute(data) {
		this.changeRoute.emit(data);
	}

	public emitChangeLanguage(data) {
		this.changeLanguage.emit(data);
	}

	public emitRequestError(data) {
		this.requestError.emit(data);
	}
	
	public emitProcessedResult(data) {
		this.processedResult.emit(data);
	}
	
	public emitChangeSharedOptions(data) {
		this.changeSharedOptions.emit(data);
	}
}
