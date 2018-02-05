import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';

import { ScorePanelComponent } from './score-panel.component';


describe('ScorePanelComponent', () => {
	let component: ScorePanelComponent;
	let fixture: ComponentFixture<ScorePanelComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ScorePanelComponent],
			imports: [CommonModule, CoreModule],
		});
		fixture = TestBed.createComponent(ScorePanelComponent);
		component = fixture.componentInstance;
	});
	
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
