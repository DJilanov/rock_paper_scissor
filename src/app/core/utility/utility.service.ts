import { Injectable } from '@angular/core';

const smallDeviceAverageSize = 1800;

@Injectable()
export class UtilityService {

	constructor() { }

	treatAsUtc(date): any {
		const result = new Date(date);
		result.setMinutes(result.getMinutes() + result.getTimezoneOffset());
		return result;
	}

	daysBetween(startDate: Date, endDate: Date): number {
		const millisecondsPerDay = 24 * 60 * 60 * 1000;
		return (this.treatAsUtc(endDate) - this.treatAsUtc(startDate)) / millisecondsPerDay;
	}

	formatPhoneNumber(phoneNumber): string {
		let newNumber = phoneNumber.replace(/\D/g, '');
		if (newNumber.charAt(0) === 0) {
			newNumber = newNumber.substring(1);
		}
		// TODO: Add default number for which language
		newNumber = '+359' + newNumber;
		return newNumber;
	}

	isLocalStorageNameSupported(): Boolean {
		const testKey = 'test', storage = window.localStorage;
		try {
			storage.setItem(testKey, '1');
			storage.removeItem(testKey);
			return true;
		} catch (error) {
			return false;
		}
	}

	isSmallDevice(): boolean {
		var w = window,
			d = document,
			e = d.documentElement,
			g = d.getElementsByTagName('body')[0],
			width = w.innerWidth || e.clientWidth || g.clientWidth,
			height = w.innerHeight || e.clientHeight || g.clientHeight;

		return width + height < smallDeviceAverageSize;
	}
}
