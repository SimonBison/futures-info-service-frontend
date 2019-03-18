import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddFutureComponent} from "./add-future/add-future.component";
import { FuturesComponent } from './futures/futures.component';


const routes: Routes = [

  { path:'', component: FuturesComponent },
  { path:'addcontract', component: AddFutureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
