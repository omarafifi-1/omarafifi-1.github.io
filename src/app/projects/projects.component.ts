import { Component } from '@angular/core';

// 1. Define an interface for your project data
interface Project {
  id: number;
  name: string;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  link: string|null;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      name: 'DishPlan Web App',
      imageUrl: 'assets/P1.png',
      shortDescription: 'A full-stack MVC recipe book and meal planner web application.',
      longDescription: 'A comprehensive web application that allows users to browse, create, and manage recipes and meal plans. Features user authentication, recipe search, and a dynamic meal planner calendar with a smart shopping list generator.',
      technologies: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'Tailwind CSS', 'JavaScript', 'MVC Pattern'],
      link: 'https://github.com/omarafifi-1/RecipeBookAndMealPlanner'
    },
    {
      id: 2,
      name: 'Connect Four Game',
      imageUrl: 'assets/P2.png',
      shortDescription: 'Connect Four Game',
      longDescription: 'A WindowsForms application that allows two players to play the classic Connect Four game. Features a clean UI, score tracking, and an option to play against AI.',
      technologies: ['C#', 'Windows Forms', '.NET Framework'],
      link: 'https://github.com/omarafifi-1/ConnectFourGame'
    },
    {
      id: 3,
      name: 'ADAS Car System',
      imageUrl: 'assets/P3.png',
      shortDescription: 'Self Driving Car With ADAS System Capabilities',
      longDescription: 'A comprehensive system designed for autonomous vehicles, featuring advanced driver-assistance systems (ADAS) such as lane-keeping assist, adaptive cruise control, and automatic emergency braking.',
      technologies: ['C', 'ARM Cortex', 'Bare Metal Programming', 'OpenCV'],
      link: 'https://github.com/elkhaligy/ADAS'
    },
    {
      id: 4,
      name: 'IC Identifier And Tester',
      imageUrl: 'assets/P4.jpg',
      shortDescription: 'IC Identifier And Tester',
      longDescription: 'A microcontroller-based system that identifies and tests various integrated circuits (ICs). It features a clean hardware interface, and automated testing procedures to ensure functionality.',
      technologies: ['C', 'Microcontrollers', 'Embedded Systems', 'Testing'],
      link: null
    }
  ];

  selectedProject: Project | null = null;

  constructor() { }

  showProjectDetails(project: Project) {
    this.selectedProject = project;
  }
}
