import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivated } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivated {
  server: { id: number; name: string; status: string; } | undefined;
  serverName: string | undefined = '';
  serverStatus:  string | undefined = '';
  allowEdit: boolean = false
  changesSaved: boolean = false

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params)=>{
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    })
    this.route.fragment.subscribe()
    const id = +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(id);
    this.serverName = this.server?.name;
    this.serverStatus = this.server?.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server!.id, {
      name: this.serverName ?? '',
      status: this.serverStatus ?? ''
    });
    this.changesSaved = true
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  canDeactivated(): Observable<boolean> | Promise<boolean> | boolean{
     if(!this.allowEdit){
      return true
     }else {
      if((this.serverName !== this.server?.name || this.serverStatus) && !this.changesSaved){
        return confirm('do you want to discard the changes')
      }else{
        return true
      }
     }
  }

}
