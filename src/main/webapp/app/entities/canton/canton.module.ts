import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeBuildingVersion1SharedModule } from 'app/shared/shared.module';
import { CantonComponent } from './canton.component';
import { CantonDetailComponent } from './canton-detail.component';
import { CantonUpdateComponent } from './canton-update.component';
import { CantonDeleteDialogComponent } from './canton-delete-dialog.component';
import { cantonRoute } from './canton.route';

@NgModule({
  imports: [HomeBuildingVersion1SharedModule, RouterModule.forChild(cantonRoute)],
  declarations: [CantonComponent, CantonDetailComponent, CantonUpdateComponent, CantonDeleteDialogComponent],
  entryComponents: [CantonDeleteDialogComponent],
})
export class HomeBuildingVersion1CantonModule {}
