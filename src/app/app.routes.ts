import { Routes } from '@angular/router';
import { MainComponent } from './pagas/main/main.component';
import { MenuComponent } from './pagas/menu/menu.component';
import { OrderComponent } from './pagas/order/order.component';
import { AboutUsComponent } from './pagas/about-us/about-us.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: "main", component: MainComponent },
    { path: "menu", component: MenuComponent },
    { path: "order", component: OrderComponent },
    { path: "about-us", component: AboutUsComponent }
];
