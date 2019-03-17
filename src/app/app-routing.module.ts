import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FuturesComponent} from "./futures/futures.component";


const routes: Routes = [
  { path: 'futures', component: FuturesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
