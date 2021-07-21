import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeStaffPage } from './home-staff.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomeStaffPage,
    children: [
      {
         path: 'beranda-staff',
         children:[
           {
             path:'',
             loadChildren:() =>import('../pages/beranda-staff/beranda-staff.module').then(m => m.BerandaStaffPageModule)
           }
         ]
      },
      {
        path: 'chat',
        children:[
          {
            path:'',
            loadChildren:() =>import('../pages/chat/chat.module').then(m => m.ChatPageModule)
          }
        ]
      },
      {
        path: 'e-learning',
        children:[
          {
            path:'',
            loadChildren:() =>import('../pages/e-learning/e-learning.module').then(m => m.ELearningPageModule)
          }
        ]
      },
      {
        path: 'profil',
        children:[
          {
            path:'',
            loadChildren:() =>import('../pages/profil/profil.module').then(m => m.ProfilPageModule)
          }
        ]
      },
      {
        path: 'video',
        children:[
          {
            path:'',
            loadChildren:() =>import('../pages/video/video.module').then(m => m.VideoPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo:'/tabs/beranda-staff',
        pathMatch:'full'

      }
    ]
  },
  {
    path:'',
    redirectTo:'/tabs/beranda-staff',
    pathMatch:'full'

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeStaffPageRoutingModule {}
