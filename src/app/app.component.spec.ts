/* tslint:disable:no-unused-variable */
import { CommonModule } from '@angular/common';
import { TestBed, async } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
	Http, HttpModule, XHRBackend, ResponseOptions,
	Response, BaseRequestOptions
} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


import { CoreModule } from './core/core.module';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { FeedbackModule } from './feedback/feedback.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{
					provide: Http, useFactory: (backend, options) => {
						return new Http(backend, options);
					},
					deps: [MockBackend, BaseRequestOptions]
				},
				MockBackend,
				BaseRequestOptions,
				HttpClientModule
			],
			declarations: [
				AppComponent
			],
			imports: [
				CommonModule,
				CoreModule,
				SharedModule,
				FeedbackModule,
				ComponentsModule,
				RouterTestingModule,
				HttpModule, HttpClientModule
			]
		});
	});

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
});
