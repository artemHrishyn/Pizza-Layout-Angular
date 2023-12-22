import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: "main", component: MainComponent },
    { path: "menu", component: MainComponent },
    { path: "order", component: MainComponent },
    { path: "about-as", component: MainComponent },
];
