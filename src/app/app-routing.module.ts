import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { ServiceComponent } from './service/service.component';
import { ReachusComponent } from './reachus/reachus.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path:'exp',
    component:ExperienceComponent
  },
  {
    path:'service',
    component:ServiceComponent
  },
  {
    path:'reachus',
    component:ReachusComponent
  },
  {
    path:'home',
    component:HomeComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
