import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { CitasComponent } from './pages/citas/citas.component';

const routes: Routes = [  // se configuran las rutas principales
  {  path: 'home', component: HomeComponent },
  {  path: 'citas', component: CitasComponent },
  {  path: 'personas', component: PersonasComponent },

  {
    path: '**', redirectTo: 'home'  // si no se encuentra la ruta se redirecciona a la ruta principal
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
