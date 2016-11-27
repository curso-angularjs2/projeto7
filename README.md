# Rotas em AngularJS

Agora vamos utilizar as rotas no Angular 2 fazendo um simples exemplo de navegação entre a página inicial do nosso sistema e 
dois menus de cadastros, o menu de Usuário e de Perfil.

Vamos utilizar a mesma estrutura do projeto anterior, mas primeiro vamos criar os arquivos de configuração da rota.

* projeto7/app/config/routes/routes.ts

~~~javascript
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

~~~

Também é necessário nós colocarmos a tag <base href="/"> em nosso html, assim o nosso html ficará assim:

~~~html
<html>

    <head>
        <base href="/">
        <title>Projeto 7</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
        <script src="node_modules/core-js/client/shim.min.js"></script>
        <script src="node_modules/zone.js/dist/zone.js"></script>
        <script src="node_modules/reflect-metadata/Reflect.js"></script>
        <script src="node_modules/systemjs/dist/system.src.js"></script>
        <!-- 2. Configuração -->
        <script src="systemjs.config.js"></script>
        <script>
            System.import('app').catch(function (err) {
                console.error(err);
            });
        </script>
    </head>

    <body>
    <projeto7>
        <img class="col-md-1" src="img/preloader.gif" />
    </projeto7>
</body>

</html>

~~~

Agora vamos colocar o import './rxjs-operators'; em nosso componente principal, mas antes precisamos criar o arquivo rxjs-operators.ts

* projeto7/app/config/component/rxjs-operators.ts

~~~javascript
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
~~~

e o nosso componente principal ficará assim:

~~~javascript
import { Component } from '@angular/core';
import './rxjs-operators';

@Component({
    selector: 'projeto7',
    template: `
            <nav class="navbar navbar-default">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" routerLink="/">Projeto 7</a>
                </div>
                <ul class="nav navbar-nav">
                  <li class="active"><a routerLink="/">Página inicial</a></li>
                  <li><a routerLink="/usuario">Usuários</a></li>
                  <li><a routerLink="/perfil">Perfis</a></li>
                </ul>
              </div>
            </nav>

            <div class="container">
              <router-outlet></router-outlet>
            </div>
    `
})

export class AppComponent {

}

~~~

Repare que dentro do componente princial nós mudamos o nosso template com o seguinte html:

~~~html
            <nav class="navbar navbar-default">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" routerLink="/">Projeto 7</a>
                </div>
                <ul class="nav navbar-nav">
                  <li class="active"><a routerLink="/">Página inicial</a></li>
                  <li><a routerLink="/usuario">Usuários</a></li>
                  <li><a routerLink="/perfil">Perfis</a></li>
                </ul>
              </div>
            </nav>

            <div class="container">
              <router-outlet></router-outlet>
            </div>
~~~

Também temos que importar as configurações de rota para o nosso módulo.

Fazemos isso da seguinte forma:

~~~javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Services 
import { UsuarioService } from '../../usuario/service/usuario.service';
import { PerfilService } from '../../perfil/service/perfil.service';

//Components
import { AppComponent } from './../component/app.component';
import { UsuarioComponent } from '../../usuario/component/usuario.component';
import { HomeComponent } from '../../home/component/home.component';
import { PerfilComponent } from '../../perfil/component/perfil.component';
import { PerfilComponentForm } from '../../perfil/component/perfil.component.form';

//adicione essa linha
import { routing } from '../routes/routes';

import { HttpModule }    from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
        
    ],
    declarations: [
        AppComponent,
        UsuarioComponent,
        HomeComponent,
        PerfilComponent,
        PerfilComponentForm
    ],
    providers:[
        UsuarioService,
        PerfilService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

~~~

Pronto! Agora nossas rotas estão configuradas, baixe o projeto e repare que motificamos a forma de implementação do CRUD de perfil.
Veja o demo desse projeto <a href="https://angular2-rotas.herokuapp.com/">aqui</a>



