import { Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MainComponent } from './components/main/main.component';
import {ContactComponent} from "./components/contact/contact/contact.component";

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
    },
    {
        path: 'skills',
        component: SkillsComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
];
