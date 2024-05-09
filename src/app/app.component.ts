import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirebaseModule } from './firebase.module';
import { HeaderComponent } from './components/main-block/header/header.component';
import { FooterComponent } from './components/main-block/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/firebase/data.service';

@Component({
  selector: 'pla-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    FirebaseModule,
    HeaderComponent,
    FooterComponent
  ],
  providers:[
    DataService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'storage-test';
}
