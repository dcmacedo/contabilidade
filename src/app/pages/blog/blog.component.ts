import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, MenuBarComponent, NgFor],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    { id: 1, title: 'Postagem 1', summary: 'Resumo da postagem 1...' },
    { id: 2, title: 'Postagem 2', summary: 'Resumo da postagem 2...' },
    { id: 3, title: 'Postagem 3', summary: 'Resumo da postagem 3...' }
  ];
}
