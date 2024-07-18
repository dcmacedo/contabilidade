import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';


interface Service {
  name: string;
  description: string;
  ctaLink: string;
}

interface Testimonial {
  feedback: string;
  client: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuBarComponent, NgFor, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  services: Service[] = [
    { name: 'Contabilidade', description: 'Serviços contábeis completos para empresas de todos os portes.', ctaLink: '/services/accounting' },
    { name: 'Cursos de Excel', description: 'Cursos de Excel do básico ao avançado.', ctaLink: '/services/excel-courses' },
    { name: 'Elaboração de Planilhas', description: 'Criação de planilhas personalizadas.', ctaLink: '/services/spreadsheet-design' }
  ];

  testimonials: Testimonial[] = [
    { feedback: 'Serviço excelente, recomendo a todos!', client: 'Maria Silva' },
    { feedback: 'Os cursos de Excel foram extremamente úteis.', client: 'João Pereira' },
    { feedback: 'As planilhas personalizadas facilitaram muito nossa gestão.', client: 'Ana Costa' }
  ];

}
