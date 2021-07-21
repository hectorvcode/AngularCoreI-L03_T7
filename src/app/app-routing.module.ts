import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationGuard } from './authentication.guard';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes = [
  { path: 'country-list', canActivate:[AuthenticationGuard], component: CountryListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
