import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirebaseModule } from './firebase.module';
import { HeaderComponent } from './components/main-block/header/header.component';
import { FooterComponent } from './components/main-block/footer/footer.component';

@Component({
  selector: 'pla-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FirebaseModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'storage-test';
}
