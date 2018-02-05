import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';

import { ChoicePanelComponent } from './choice-panel.component';


describe('ChoicePanelComponent', () => {
	let component: ChoicePanelComponent;
	let fixture: ComponentFixture<ChoicePanelComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ChoicePanelComponent],
			imports: [CommonModule, CoreModule],
		});
		fixture = TestBed.createComponent(ChoicePanelComponent);
		component = fixture.componentInstance;
	});
	
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
