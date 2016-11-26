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

import { routing } from '../routes/routes';

//adicione essa linha
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
        PerfilComponent
    ],
    providers:[
        UsuarioService,
        PerfilService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
