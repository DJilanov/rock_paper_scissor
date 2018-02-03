import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FeedbackModule } from './feedback/feedback.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { GamePageComponent } from './game-page/game-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
	declarations: [
		AppComponent,
		GamePageComponent,
		HomePageComponent,
		ContactPageComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,

		CoreModule,
		SharedModule,
		FeedbackModule,
		ComponentsModule
	],
	providers: [
		CoreModule,
		SharedModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
