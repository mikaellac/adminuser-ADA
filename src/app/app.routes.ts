import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {ListProductsComponent} from "./list-products/list-products.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {authenticationGuard} from "./guards/authentication.guard";
import {adminGuard} from "./guards/admin.guard";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'listar-produto', component: ListProductsComponent, canActivate: [authenticationGuard()]},
  {path: 'adicionar-produto', component: AddProductComponent, canActivate: [authenticationGuard(), adminGuard()]},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
