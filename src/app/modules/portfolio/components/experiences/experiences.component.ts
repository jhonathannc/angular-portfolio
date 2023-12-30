import { Component, signal } from '@angular/core';
import { experiences } from './experiences';
import { IExperienceInterface } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public experiences = signal<IExperienceInterface[]>(experiences);
}
