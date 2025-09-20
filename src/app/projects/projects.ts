import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../scroll';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
 projects = [
  {
    title: 'Portfolio Website',
    type: 'Web App',
    description: 'A personal portfolio to showcase projects...',
    techStack: ['Angular', 'Bootstrap', 'HTML', 'CSS'],
    github: 'https://github.com/soma-surendra-degala/Portfolio',
    live: 'https://portfolio-main-surendra.vercel.app/',
    screenshot: 'assets/Portfolio.png'
  },
  {
    title:  "FLOW",
    type: "Web App",
    techStack: ["Angular", "Bootstrap", "Node.js", "MongoDb"],
    description: "Learning Management System",
    screenshot: "assets/20250921003750.png",
    github: "https://github.com/soma-surendra-degala/FLOW.git",
    live: "https://flowlms.netlify.app/",
    },
  {
    title: 'Recipe Hub',
    type: 'Web App',
    description: 'Developed for managing and discovering over 10000 recipes',
    techStack: ['React.js', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/your-username/recipe-hub',
    live: 'https://recipehub.netlify.app',
    screenshot: 'assets/02.png' // <-- add this
  },{
  title: 'LocalSports',
  type: 'Web App',
  description: 'A platform to explore and manage local sports events and teams.',
  techStack: ['React.js', 'MongoDb', 'Node.js', 'Express.js'],
  github: 'https://github.com/soma-surendra-degala/Local_Sports',
  live: 'https://localsports.netlify.app',
  screenshot: 'assets/localsports.png'
},{
  title: 'Web Stories',
  type: 'Web App',
  description: 'An engaging platform built with React.js for creating and viewing immersive web-based stories.',
  techStack: ['React.js', 'MongoDb', 'Node.js', 'Express.js'],
  github: 'https://github.com/soma-surendra-degala/WebStories',
  live: 'https://web-stories-theta.vercel.app/',
  screenshot: 'assets/WebStories.png'
}

];


}
