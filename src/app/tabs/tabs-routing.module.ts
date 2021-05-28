import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'qoutes',
        loadChildren: () => import('../qoutes/qoutes.module').then(m => m.QoutesPageModule)
      },
      {
        path: 'qoutes/edit-qoute',
        loadChildren: () => import('../edit-qoute/edit-qoute.module').then(m => m.EditQoutePageModule)
      },
     
        {
          path: 'qoutes/:id/edit',
          loadChildren: () => import('../edit-qoute/edit-qoute.module').then(m => m.EditQoutePageModule)
        },
      
        
      {
        path: 'qoutes/:id',
        loadChildren: () => import('../qoute-details/qoute-details.module').then(m => m.QouteDetailsPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/qoutes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/qoutes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
