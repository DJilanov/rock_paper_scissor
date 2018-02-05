/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
	Http, HttpModule, XHRBackend, ResponseOptions,
	Response, BaseRequestOptions
} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { BackendService } from './backend.service';

describe('BackendService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule, HttpClientModule],
			providers: [
				{
					provide: Http, useFactory: (backend, options) => {
						return new Http(backend, options);
					},
					deps: [MockBackend, BaseRequestOptions]
				},
				BackendService,
				MockBackend,
				BaseRequestOptions,
				HttpClientModule
			]
		});
	});

	it('should inject', inject([BackendService], (service: BackendService) => {
		expect(service).toBeTruthy();
	}));
});
