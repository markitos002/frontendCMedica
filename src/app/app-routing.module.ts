import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { CitasComponent } from './pages/citas/citas.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [  // se configuran las rutas principales de la aplicación
  {  path: '', redirectTo: '/home', pathMatch: 'full' },  // si la ruta es vacía se redirecciona a la ruta principal
  {  path: 'home', component: HomeComponent },
  {  path: 'citas', component: CitasComponent },
  {  path: 'personas', component: PersonasComponent },
  {  path: 'login', component: LoginComponent},
  {  path: '**', redirectTo: '/home' } // si no se encuentra la ruta se redirecciona a la ruta principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
