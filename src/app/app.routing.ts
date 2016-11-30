import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
 
export const AppRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "page2", component: AboutComponent }
];
 
export const AppComponents: any = [
    HomeComponent,
    AboutComponent
];