import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'author', component:AuthorComponent},
  {path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
