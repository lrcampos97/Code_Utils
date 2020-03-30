import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LojasPage } from './lojas';

@NgModule({
  declarations: [
    LojasPage,
  ],
  imports: [
    IonicPageModule.forChild(LojasPage),
  ],
})
export class LojasPageModule {}
