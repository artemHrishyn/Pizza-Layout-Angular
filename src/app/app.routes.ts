import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrderComponent } from './pages/order/order.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: "main", component: MainComponent },
    { path: "menu", component: MenuComponent },
    { path: "order", component: OrderComponent },
    { path: "about-us", component: AboutUsComponent },
];
