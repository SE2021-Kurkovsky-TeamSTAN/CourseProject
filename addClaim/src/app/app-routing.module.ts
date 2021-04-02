import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { GetClaimComponent } from './get-claim/get-claim.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add-claim', component: AddClaimComponent},
  {path: 'get-claim', component: GetClaimComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
