﻿/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UtilityService } from './utility.service';

describe('UtilityService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [UtilityService]
		});
	});

	it('should ...', inject([UtilityService], (service: UtilityService) => {
		expect(service).toBeTruthy();
	}));

	it('should return the number of days between the specified dates', inject([UtilityService], (service: UtilityService) => {
		const difference = service.daysBetween(new Date(1480356000), new Date(1653156000)); // Jan 18, Jan 20
		expect(difference).toBe(2);
	}));
});
