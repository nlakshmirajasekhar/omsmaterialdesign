import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './cients/clients/clients.component';
import { OrderIComponent } from './orders/order-i/order-i.component';
import { CreatevendorComponent } from './vendors/createvendor/createvendor.component';
import { VendorsComponent } from './vendors/vendors.component';

const routes: Routes = [
{
  path:'vendor', component:VendorsComponent,
  
},
{
  path:'create', component:CreatevendorComponent
},
{
  path:'clientM',component:ClientsComponent
},
{
  path:'orderM',component:OrderIComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
