import { NgModule } from '@angular/core';
import { SharedModule } from './../../modules';
import { ContainerComponent } from './container.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ContainerComponent],
  exports: [ContainerComponent]
})
export class ContainerModule { }
