import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarWarsComponent } from './star-wars/star-wars.component';

const routes: Routes = [
  { path: '', redirectTo: 'StarWarsComponent', pathMatch: 'full' },
  { path: 'starwars', component: StarWarsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
