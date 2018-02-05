import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';

import { ErrorMessageComponent } from './error-message.component';


describe('ErrorMessageComponent', () => {
	let component: ErrorMessageComponent;
	let fixture: ComponentFixture<ErrorMessageComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ErrorMessageComponent],
			imports: [CommonModule, CoreModule],
		});
		fixture = TestBed.createComponent(ErrorMessageComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
