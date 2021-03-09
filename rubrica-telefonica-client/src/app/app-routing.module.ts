import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountPageComponent } from './count-page/count-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  { path: "main-page", component: MainPageComponent },
  { path: "error-page", component: ErrorPageComponent },
  { path: "login-page", component: LoginPageComponent },
  { path: "search-page", component: SearchPageComponent },
  { path: "count-page", component: CountPageComponent },
  { path: "", redirectTo: "/login-page", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
