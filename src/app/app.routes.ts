import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContatoComponent } from './features/contato/contato.component';
import { CursosComponent } from './features/cursos/cursos.component';
import { MembrosComponent } from './features/membros/membros.component';
import { PlanilhasComponent } from './features/planilhas/planilhas.component';
import { ServicosComponent } from './features/servicos/servicos.component';

export const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'planilhas', component: PlanilhasComponent },
{ path: 'cursos', component: CursosComponent },
{ path: 'servicos', component: ServicosComponent },
{ path: 'membros', component: MembrosComponent },
{ path: 'contato', component: ContatoComponent },
{ path: '**', redirectTo: '', pathMatch: 'full' } // Rota de fallback
];
