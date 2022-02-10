import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { ListeEspecesComponent } from './liste-especes/liste-especes.component'
import { DetailsEspecesComponent } from './details-especes/details-especes.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'liste-especes', component: ListeEspecesComponent },
    { path: 'details-especes/:faoCode', component: DetailsEspecesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
