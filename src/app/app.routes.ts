import { Routes } from '@angular/router';
import { MainComponent } from './pagas/main/main.component';
import { MenuComponent } from './pagas/menu/menu.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: "main", component: MainComponent },
    { path: "menu", component: MenuComponent }
];
