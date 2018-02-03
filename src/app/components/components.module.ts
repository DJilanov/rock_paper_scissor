import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ScorePanelComponent } from './score-panel/score-panel.component';
import { ChoicePanelComponent } from './choice-panel/choice-panel.component';
import { BattlePanelComponent } from './battle-panel/battle-panel.component';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '../core/module-import-guard';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ScorePanelComponent,
        ChoicePanelComponent,
        BattlePanelComponent
    ],
    declarations: [
        ScorePanelComponent,
        ChoicePanelComponent,
        BattlePanelComponent
    ]
})
export class ComponentsModule {
	constructor( @Optional() @SkipSelf() parentModule: CommonModule) {
		throwIfAlreadyLoaded(parentModule, 'ComponentsModule');
	}
}