// app.routes.ts

import { Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { MembersComponent } from './pages/members/members.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'members', component: MembersComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent }
];
