import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lupa-password',
    loadChildren: () => import('./lupa-password/lupa-password.module').then( m => m.LupaPasswordPageModule)
  },
  {
    path: 'home-staff',
    loadChildren: () => import('./home-staff/home-staff.module').then( m => m.HomeStaffPageModule)
  },
  {
    path: 'home-guest',
    loadChildren: () => import('./home-guest/home-guest.module').then( m => m.HomeGuestPageModule)
  },
  {
    path: 'pengaturan',
    loadChildren: () => import('./pengaturan/pengaturan.module').then( m => m.PengaturanPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'edit-profil',
    loadChildren: () => import('./edit-profil/edit-profil.module').then( m => m.EditProfilPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'recruitment',
    loadChildren: () => import('./pages/recruitment/recruitment.module').then( m => m.RecruitmentPageModule)
  },
  {
    path: 'e-learning',
    loadChildren: () => import('./pages/e-learning/e-learning.module').then( m => m.ELearningPageModule)
  },
  {
    path: 'beranda-staff',
    loadChildren: () => import('./pages/beranda-staff/beranda-staff.module').then( m => m.BerandaStaffPageModule)
  },
  {
    path: 'beranda-guest',
    loadChildren: () => import('./pages/beranda-guest/beranda-guest.module').then( m => m.BerandaGuestPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'qr-code',
    loadChildren: () => import('./qr-code/qr-code.module').then( m => m.QrCodePageModule)
  },
  {
    path: 'profil-other',
    loadChildren: () => import('./profil-other/profil-other.module').then( m => m.ProfilOtherPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
