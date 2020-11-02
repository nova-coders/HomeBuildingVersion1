import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeBuildingVersion1SharedModule } from 'app/shared/shared.module';
import { SaleComponent } from './sale.component';
import { SaleDetailComponent } from './sale-detail.component';
import { SaleUpdateComponent } from './sale-update.component';
import { SaleDeleteDialogComponent } from './sale-delete-dialog.component';
import { saleRoute } from './sale.route';

@NgModule({
  imports: [HomeBuildingVersion1SharedModule, RouterModule.forChild(saleRoute)],
  declarations: [SaleComponent, SaleDetailComponent, SaleUpdateComponent, SaleDeleteDialogComponent],
  entryComponents: [SaleDeleteDialogComponent],
})
export class HomeBuildingVersion1SaleModule {}
