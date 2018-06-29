import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ContainerOptions } from './../../core/components';
import { NgxParticlesjsModule } from "ngx-particlesjs";

@Component({
  selector: 'dg-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.less'],
  encapsulation: ViewEncapsulation.None
})

export class AuthLayoutComponent implements OnInit {

  public containerOptions: ContainerOptions;

  public particleOptions = {
    color: ['#ffffff', '#7fd0d7', '#00a1af', '#00808c', '#005057'],
    sizeVariations: 4,
    connectParticles: true,
    speed: 0.7
  }

  constructor() {
    this.containerOptions = new ContainerOptions(false, false);
  }

  ngOnInit() {
  }

}
