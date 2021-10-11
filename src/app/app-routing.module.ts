import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './pages/entry/entry.component';
import { MessengerComponent } from './pages/messenger/messenger.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: 'entry', pathMatch: 'full' },
	{ path: 'entry', component: EntryComponent },
	{ path: 'messenger', component: MessengerComponent },
	{ path: '**', component: NotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
