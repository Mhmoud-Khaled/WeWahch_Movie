import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DetailsComponent } from './Components/details/details.component';
import { SearchComponent } from './Components/search/search.component';
import { GenresComponent } from './Components/genres/genres.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'details/:id', component:DetailsComponent},
  {path:'search', component:SearchComponent},
  {path:'genres', component:GenresComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', redirectTo:'home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
