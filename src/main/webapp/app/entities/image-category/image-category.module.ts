import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeBuildingVersion1SharedModule } from 'app/shared/shared.module';
import { ImageCategoryComponent } from './image-category.component';
import { ImageCategoryDetailComponent } from './image-category-detail.component';
import { ImageCategoryUpdateComponent } from './image-category-update.component';
import { ImageCategoryDeleteDialogComponent } from './image-category-delete-dialog.component';
import { imageCategoryRoute } from './image-category.route';

@NgModule({
  imports: [HomeBuildingVersion1SharedModule, RouterModule.forChild(imageCategoryRoute)],
  declarations: [ImageCategoryComponent, ImageCategoryDetailComponent, ImageCategoryUpdateComponent, ImageCategoryDeleteDialogComponent],
  entryComponents: [ImageCategoryDeleteDialogComponent],
})
export class HomeBuildingVersion1ImageCategoryModule {}
