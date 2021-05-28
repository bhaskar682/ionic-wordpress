import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  
  // {
  //   path: 'qoutes',
  //   loadChildren: () => import('./qoutes/qoutes.module').then( m => m.QoutesPageModule)
  // },
  // {
  //   path: 'qoute',
  //   loadChildren: () => import('./qoute/qoute.module').then( m => m.QoutePageModule)
  // },
  // {
  //   path: 'qoute-details',
  //   loadChildren: () => import('./qoute-details/qoute-details.module').then( m => m.QouteDetailsPageModule)
  // },
  // {
  //   path: 'edit-qoute',
  //   loadChildren: () => import('./edit-qoute/edit-qoute.module').then( m => m.EditQoutePageModule)
  // },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
