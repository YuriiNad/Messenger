import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './pages/entry/entry.component';
import { MessengerComponent } from './pages/messenger/messenger.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: 'chat', pathMatch: 'full' },
	{ path: 'entry', component: EntryComponent },
	{ path: 'chat', component: MessengerComponent, canActivate: [AuthGuard] },
	{ path: '**', component: NotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
