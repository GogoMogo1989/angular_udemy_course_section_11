import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { InjectSetupWrapper } from "@angular/core/testing";
import { Injectable } from "@angular/core";

interface Server {
    id: number,
    name: string,
    status: string
}

@Injectable()
export class ServerResolver implements Resolve<Server> {

    constructor(private serversService: ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server{
        const server = this.serversService.getServer(+route.params['id']);
        if (server) {
          return server
        } else {
          return {
            id: 1,
            name: 'k',
            status:'b'
          }
        }
    }
}