import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'users',
    component: UserComponent
  },
  {
    path:'servers',
    component: ServersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
