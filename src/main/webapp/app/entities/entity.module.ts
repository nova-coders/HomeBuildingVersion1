import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'money-type',
        loadChildren: () => import('./money-type/money-type.module').then(m => m.HomeBuildingVersion1MoneyTypeModule),
      },
      {
        path: 'user-account',
        loadChildren: () => import('./user-account/user-account.module').then(m => m.HomeBuildingVersion1UserAccountModule),
      },
      {
        path: 'professional-profile-user',
        loadChildren: () =>
          import('./professional-profile-user/professional-profile-user.module').then(
            m => m.HomeBuildingVersion1ProfessionalProfileUserModule
          ),
      },
      {
        path: 'support-ticket',
        loadChildren: () => import('./support-ticket/support-ticket.module').then(m => m.HomeBuildingVersion1SupportTicketModule),
      },
      {
        path: 'support-ticket-log',
        loadChildren: () =>
          import('./support-ticket-log/support-ticket-log.module').then(m => m.HomeBuildingVersion1SupportTicketLogModule),
      },
      {
        path: 'canton',
        loadChildren: () => import('./canton/canton.module').then(m => m.HomeBuildingVersion1CantonModule),
      },
      {
        path: 'province',
        loadChildren: () => import('./province/province.module').then(m => m.HomeBuildingVersion1ProvinceModule),
      },
      {
        path: 'document',
        loadChildren: () => import('./document/document.module').then(m => m.HomeBuildingVersion1DocumentModule),
      },
      {
        path: 'property',
        loadChildren: () => import('./property/property.module').then(m => m.HomeBuildingVersion1PropertyModule),
      },
      {
        path: 'property-category',
        loadChildren: () => import('./property-category/property-category.module').then(m => m.HomeBuildingVersion1PropertyCategoryModule),
      },
      {
        path: 'publishing-package',
        loadChildren: () =>
          import('./publishing-package/publishing-package.module').then(m => m.HomeBuildingVersion1PublishingPackageModule),
      },
      {
        path: 'score',
        loadChildren: () => import('./score/score.module').then(m => m.HomeBuildingVersion1ScoreModule),
      },
      {
        path: 'property-image',
        loadChildren: () => import('./property-image/property-image.module').then(m => m.HomeBuildingVersion1PropertyImageModule),
      },
      {
        path: 'image-category',
        loadChildren: () => import('./image-category/image-category.module').then(m => m.HomeBuildingVersion1ImageCategoryModule),
      },
      {
        path: 'sale',
        loadChildren: () => import('./sale/sale.module').then(m => m.HomeBuildingVersion1SaleModule),
      },
      {
        path: 'rent',
        loadChildren: () => import('./rent/rent.module').then(m => m.HomeBuildingVersion1RentModule),
      },
      {
        path: 'offer',
        loadChildren: () => import('./offer/offer.module').then(m => m.HomeBuildingVersion1OfferModule),
      },
      {
        path: 'role',
        loadChildren: () => import('./role/role.module').then(m => m.HomeBuildingVersion1RoleModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class HomeBuildingVersion1EntityModule {}
