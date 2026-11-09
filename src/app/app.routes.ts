import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent,canActivate:[authGuard]},
    {path:'dashboard',component:DashboardComponent},
    {path:'products',component:ProductsComponent},
    {path:'**',redirectTo:'home'}

];
