import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from '../../usuario/component/usuario.component';
import { HomeComponent } from '../../home/component/home.component';
import { PerfilComponent } from '../../perfil/component/perfil.component';
import { PerfilComponentForm } from '../../perfil/component/perfil.component.form';


//Configurações da rota
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'usuario/:id', component: UsuarioComponent },
    { path: 'home', component: HomeComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'perfil-add', component: PerfilComponentForm },
    { path: 'perfil-edit/:id', component: PerfilComponentForm }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
