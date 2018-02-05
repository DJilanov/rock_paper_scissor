/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoreModule } from '../core/core.module';

import { ComponentsModule } from '../components/components.module';
import { GamePageComponent } from './game-page.component';

describe('InformationalPageComponent', () => {
	let component: GamePageComponent;
	let fixture: ComponentFixture<GamePageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GamePageComponent],
			imports: [CommonModule, CommonModule, ComponentsModule, CoreModule],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GamePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
