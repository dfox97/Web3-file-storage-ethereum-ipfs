import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ViewerComponent } from './home/viewer/viewer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ViewerComponent
  ],
})
export class AppComponent {
  title = 'Web 3 IPFS Upload';
}

