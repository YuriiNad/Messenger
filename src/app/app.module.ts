import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './pages/entry/entry.component';
import { MessengerComponent } from './pages/messenger/messenger.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { UserComponent } from './components/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './components/message/message.component';

import { MatCardModule } from '@angular/material/card';
import { TickSignComponent } from './tick-sign/tick-sign.component';
import { UserFilterPipe } from './shared/users-filter.pipe';
import { LastSentPipe } from './shared/latestSentTo.pipe';
@NgModule({
	declarations: [
		AppComponent,
		EntryComponent,
		MessengerComponent,
		NotFoundComponent,
		ChatComponent,
		ChatListComponent,
		UserComponent,
		MessageComponent,
		TickSignComponent,
		UserFilterPipe,
		LastSentPipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireDatabaseModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		MatCardModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
