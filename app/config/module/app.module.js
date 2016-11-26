"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
//Services 
var usuario_service_1 = require('../../usuario/service/usuario.service');
var perfil_service_1 = require('../../perfil/service/perfil.service');
//Components
var app_component_1 = require('./../component/app.component');
var usuario_component_1 = require('../../usuario/component/usuario.component');
var home_component_1 = require('../../home/component/home.component');
var perfil_component_1 = require('../../perfil/component/perfil.component');
var perfil_component_form_1 = require('../../perfil/component/perfil.component.form');
var routes_1 = require('../routes/routes');
//adicione essa linha
var http_1 = require('@angular/http');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                routes_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                usuario_component_1.UsuarioComponent,
                home_component_1.HomeComponent,
                perfil_component_1.PerfilComponent,
                perfil_component_form_1.PerfilComponentForm
            ],
            providers: [
                usuario_service_1.UsuarioService,
                perfil_service_1.PerfilService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map