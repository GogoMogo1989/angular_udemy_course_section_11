import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'users/:id/:name',
    component: UserComponent
  },
  {
    path:'users',
    component: UserComponent
  },
  {
    path:'servers',
    component: ServersComponent
  },
  {
    path:'servers/:id',
    component: ServersComponent
  },
  {
    path:'servers/:id/:edit',
    component: EditServerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
