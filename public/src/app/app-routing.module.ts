import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: "", redirectTo: "/products", pathMatch: "full"},
  {path: "products", pathMatch:"full", component: ProductsComponent},
  {path: "products/new", pathMatch: "full", component: CreateComponent},
  {path: "products/:id", component: DetailsComponent},
  {path: "products/:id/edit", component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }