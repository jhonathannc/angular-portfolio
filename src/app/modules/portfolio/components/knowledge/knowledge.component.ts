import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public knowledges = signal<IKnowledge[]>([
    { src: 'assets/icons/knowledge/angular.svg', alt: 'Angular' },
    { src: 'assets/icons/knowledge/database.svg', alt: 'Banco de dados' },
    { src: 'assets/icons/knowledge/javascript.svg', alt: 'Javascript' },
    { src: 'assets/icons/knowledge/laravel.svg', alt: 'Laravel' },
    { src: 'assets/icons/knowledge/linux.svg', alt: 'Linux' },
    { src: 'assets/icons/knowledge/nodejs.svg', alt: 'NodeJS' },
  ]);
}
