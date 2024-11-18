import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RickAndMortyPageComponent } from './pages/rick-and-morty-page/rick-and-morty-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path:'rick-and-morty',
        component: RickAndMortyPageComponent
    }
];
