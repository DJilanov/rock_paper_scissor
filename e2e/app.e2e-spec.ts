import { DJBoilerplateWebPage } from './app.po';

describe('angular5-rock-paper-scissor-app', function () {
	let page: DJBoilerplateWebPage;

	beforeEach(() => {
		page = new DJBoilerplateWebPage();
	});

	it('should display message saying app works', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('Angular 5 Rock Paper Scissors game that utilize service bus architecture');
	});
});
