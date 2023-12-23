import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: "main", component: MainComponent },
    { path: "menu", component: MenuComponent },
    { path: "order", component: MainComponent },
    { path: "about-as", component: MainComponent },
];
