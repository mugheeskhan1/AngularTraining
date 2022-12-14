import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server: any;
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //way 2: not reactive to changes once page has been loaded
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    //way 2: reactive to changes after page has been loaded
    let queryParams = this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    let fragment = this.route.fragment.subscribe();
    console.log(queryParams);
    console.log(fragment);

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server?.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
