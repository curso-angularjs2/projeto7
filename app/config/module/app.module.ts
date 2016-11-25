import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './../component/app.component';
import { UsuarioComponent } from '../../usuario/component/usuario.component';
import { UsuarioService } from '../../usuario/service/usuario.service';
import { HomeComponent } from '../../home/component/home.component';

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
        HomeComponent
    ],
    providers:[
        UsuarioService
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
