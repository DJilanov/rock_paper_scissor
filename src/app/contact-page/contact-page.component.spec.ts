/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreModule } from '../core/core.module';

import { ContactPageComponent } from './contact-page.component';

describe('ContactPageComponent', () => {
	let component: ContactPageComponent;
	let fixture: ComponentFixture<ContactPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContactPageComponent],
			imports: [CommonModule, CoreModule, RouterTestingModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContactPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
