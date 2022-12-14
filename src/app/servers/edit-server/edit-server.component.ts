import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: any;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
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

    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server?.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    //navigate to last loaded server
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): any {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm('Do you want to discard?');
    } else {
      return true;
    }
  }
}
