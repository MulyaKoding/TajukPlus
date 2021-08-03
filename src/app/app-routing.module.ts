import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./ubah-rekening/ubah-rekening.module').then( m => m.UbahRekeningPageModule)
  },
  {
    path: '',
    redirectTo: 'ubah-rekening',
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
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'resolvers',
    loadChildren: () => import('./resolvers/resolvers.module').then( m => m.ResolversPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'providers',
    loadChildren: () => import('./providers/providers.module').then( m => m.ProvidersPageModule)
  },
  {
    path: 'pencarian',
    loadChildren: () => import('./pencarian/pencarian.module').then( m => m.PencarianPageModule)
  },
  {
    path: 'ganti-password',
    loadChildren: () => import('./ganti-password/ganti-password.module').then( m => m.GantiPasswordPageModule)
  },
  {
    path: 'ubah-rekening',
    loadChildren: () => import('./ubah-rekening/ubah-rekening.module').then( m => m.UbahRekeningPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'ubah-profil',
    loadChildren: () => import('./ubah-profil/ubah-profil.module').then( m => m.UbahProfilPageModule)
  },
  {
    path: 'berita-disukai',
    loadChildren: () => import('./berita-disukai/berita-disukai.module').then( m => m.BeritaDisukaiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
