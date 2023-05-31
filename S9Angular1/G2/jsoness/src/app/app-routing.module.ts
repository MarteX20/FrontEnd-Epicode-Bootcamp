import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivePostsComponentComponent } from './active-posts-component/active-posts-component.component';
import { InactivePostsComponentComponent } from './inactive-posts-component/inactive-posts-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'active-posts', component: ActivePostsComponentComponent },
  { path: 'inactive-posts', component: InactivePostsComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
