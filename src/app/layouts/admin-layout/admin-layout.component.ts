import { Component, OnInit } from '@angular/core';
import { ContainerOptions } from './../../core/components';
import { Store } from '@ngxs/store';
import { Logout} from './../../core/store/auth'; 

@Component({
  selector: 'dg-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  public containerOptions: ContainerOptions;
  constructor(
    private store: Store
  ) {
    this.containerOptions = new ContainerOptions(true, false);
  }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}
