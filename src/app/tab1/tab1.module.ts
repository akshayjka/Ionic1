import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SkillsComponentModule } from '../skills/skills.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ExperienceComponentModule } from '../experience/experience.module';
import { ServiceComponentModule } from '../service/service.module';
import { ReachusComponentModule } from '../reachus/reachus.module';
import { HomeComponentModule } from '../home/home.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SkillsComponentModule,
    Tab1PageRoutingModule,
    ExperienceComponentModule,
    ServiceComponentModule,
    ReachusComponentModule,
    HomeComponentModule

  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
