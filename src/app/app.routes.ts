import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductComponent } from './components/product/product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailsComponent } from './components/details/details.component';
export const routes: Routes = [
  {path:"", redirectTo:"Home",pathMatch:"full"},
  {path:"Home" ,component:HomeComponent},
  {path:"About" ,component: AboutUsComponent},
  {path:"Contact" ,component: ContactUsComponent},
  {path:"Products" ,component: ProductComponent},
  {path:"products/:id",component:DetailsComponent},
  {path:"**",component:NotFoundComponent}


];
