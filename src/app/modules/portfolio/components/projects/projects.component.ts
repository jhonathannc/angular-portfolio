import { Component, signal } from '@angular/core';
import { IProject } from '../../interface/IProject.interface';
import { projects } from './projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public projects = signal<IProject[]>(projects);
}
