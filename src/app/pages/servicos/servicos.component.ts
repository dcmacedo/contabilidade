import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

interface Servico {
  name: string;
  description: string;
  ctaLink?: string; // Link para mais informações ou para contratar o serviço
}

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, MenuBarComponent],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {
  servicos: Servico[] = [
    { name: 'Contabilidade', description: 'Oferecemos serviços contábeis completos para empresas de todos os portes.', ctaLink: '/contact' },
    { name: 'Cursos de Excel', description: 'Aprenda Excel do básico ao avançado com nossos cursos especializados.', ctaLink: '/contact' },
    { name: 'Elaboração de Planilhas', description: 'Criamos planilhas personalizadas para atender às suas necessidades empresariais.', ctaLink: '/contact' }
  ];
}
