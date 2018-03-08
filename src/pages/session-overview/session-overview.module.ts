import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SessionOverviewPage } from './session-overview';

@NgModule({
  declarations: [
    SessionOverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(SessionOverviewPage),
  ],
})
export class SessionOverviewPageModule {}
