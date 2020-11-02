import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeBuildingVersion1SharedModule } from 'app/shared/shared.module';
import { SupportTicketLogComponent } from './support-ticket-log.component';
import { SupportTicketLogDetailComponent } from './support-ticket-log-detail.component';
import { SupportTicketLogUpdateComponent } from './support-ticket-log-update.component';
import { SupportTicketLogDeleteDialogComponent } from './support-ticket-log-delete-dialog.component';
import { supportTicketLogRoute } from './support-ticket-log.route';

@NgModule({
  imports: [HomeBuildingVersion1SharedModule, RouterModule.forChild(supportTicketLogRoute)],
  declarations: [
    SupportTicketLogComponent,
    SupportTicketLogDetailComponent,
    SupportTicketLogUpdateComponent,
    SupportTicketLogDeleteDialogComponent,
  ],
  entryComponents: [SupportTicketLogDeleteDialogComponent],
})
export class HomeBuildingVersion1SupportTicketLogModule {}
