import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { HomeBuildingVersion1SharedModule } from 'app/shared/shared.module';
import { HomeBuildingVersion1CoreModule } from 'app/core/core.module';
import { HomeBuildingVersion1AppRoutingModule } from './app-routing.module';
import { HomeBuildingVersion1HomeModule } from './home/home.module';
import { HomeBuildingVersion1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    HomeBuildingVersion1SharedModule,
    HomeBuildingVersion1CoreModule,
    HomeBuildingVersion1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    HomeBuildingVersion1EntityModule,
    HomeBuildingVersion1AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class HomeBuildingVersion1AppModule {}
