import { Routes } from '@angular/router';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: MyFirstCompComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }, 
    {
        path: 'products',
        component: ProductsComponent
    }
];
