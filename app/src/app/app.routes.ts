import { Routes } from '@angular/router';

export const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'services', loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule) },
{ path: 'courses', loadChildren: () => import('./pages/courses/courses.module').then(m => m.CoursesModule) },
{ path: 'members', loadChildren: () => import('./pages/members/members.module').then(m => m.MembersModule) },
{ path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule) },
{ path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) }
];
