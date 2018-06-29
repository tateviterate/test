import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ContainerOptions } from './container.options';

@Component({
  selector: 'dg-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {

  @Input() options?: ContainerOptions = null;
  public showHeader?: boolean = true;
  public showFooter?: boolean = true;

  constructor() { }

  ngOnInit() {
    this.initOptions();
  }

  private initOptions(): void {
    if (!this.options) return;

    const { showHeader, showFooter } = this.options;
    this.showHeader = showHeader;
    this.showFooter = showFooter;
  }

}
