import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { GetAllCategoroiesComponent } from './get-all-categoroies/get-all-categoroies.component';
import { GetCategoryComponent } from './get-category/get-category.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'getcategory',
    component: GetCategoryComponent,
  },
  {
    path: 'getAllcategories',
    component: GetAllCategoroiesComponent,
  },
  {
    path: 'deletecategory',
    component: DeleteCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
