import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

/**
 * @EventBusService used for connections between modules
 */
export class EventBusService {

	public translate: EventEmitter<any>;
	public changeRoute: EventEmitter<any>;
	public requestError: EventEmitter<any>;
	public changeLanguage: EventEmitter<any>;
	public changeSharedOptions: EventEmitter<any>;

	constructor() {
		this.translate = new EventEmitter();
		this.changeRoute = new EventEmitter();
		this.requestError = new EventEmitter();
		this.changeLanguage = new EventEmitter();
		this.changeSharedOptions = new EventEmitter();
	}
	
	public emitTranslate(data) {
		this.translate.emit(data);
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
	
	public emitChangeSharedOptions(data) {
		this.changeSharedOptions.emit(data);
	}
}
