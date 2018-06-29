import { NgModule } from '@angular/core';
import { SharedModule } from './../../core/modules';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';

@NgModule({
  imports: [
    SharedModule,
    PlayersRoutingModule
  ],
  declarations: [PlayersComponent]
})
export class PlayersModule { }
