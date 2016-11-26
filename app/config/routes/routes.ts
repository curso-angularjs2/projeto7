import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from '../../usuario/component/usuario.component';
import { HomeComponent } from '../../home/component/home.component';
import { PerfilComponent } from '../../perfil/component/perfil.component';


//Configurações da rota
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'usuario/:id', component: UsuarioComponent },
    { path: 'home', component: HomeComponent },
    { path: 'perfil', component: PerfilComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
