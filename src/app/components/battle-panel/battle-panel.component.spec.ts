import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';

import { BattlePanelComponent } from './battle-panel.component';


describe('BattlePanelComponent', () => {
	let component: BattlePanelComponent;
	let fixture: ComponentFixture<BattlePanelComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [BattlePanelComponent],
			imports: [CommonModule, CoreModule],
		});
		fixture = TestBed.createComponent(BattlePanelComponent);
		component = fixture.componentInstance;
	});
	
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
