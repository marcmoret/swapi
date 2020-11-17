import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StarWarsComponent } from './star-wars/star-wars.component';

const routes: Routes = [
  { path: 'starwars', component: StarWarsComponent },
  { path: '', redirectTo: '/starwars', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
