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
var perfil_1 = require('../class/perfil');
var perfil_service_1 = require('../service/perfil.service');
var router_1 = require('@angular/router');
var PerfilComponentForm = (function () {
    function PerfilComponentForm(perfilService, router, routeActivated) {
        this.perfilService = perfilService;
        this.router = router;
        this.routeActivated = routeActivated;
    }
    PerfilComponentForm.prototype.salvar = function (perfil) {
        var _this = this;
        if (!perfil.nome) {
            return;
        }
        this.perfilService.salvar(perfil)
            .subscribe(function (perfil) { return _this.router.navigate(['perfil']); }, function (error) { return _this.errorMessage = error; });
    };
    PerfilComponentForm.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.routeActivated.params.subscribe(function (params) {
            var id = params['id'];
            _this.perfil = new perfil_1.Perfil();
            if (id) {
                console.log(id);
                _this.perfilService.get(id)
                    .subscribe(function (perfil) { return _this.perfil = perfil; }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    PerfilComponentForm = __decorate([
        core_1.Component({
            selector: 'perfil-form',
            templateUrl: 'app/perfil/templates/perfil.template.form.html'
        }), 
        __metadata('design:paramtypes', [perfil_service_1.PerfilService, router_1.Router, router_1.ActivatedRoute])
    ], PerfilComponentForm);
    return PerfilComponentForm;
}());
exports.PerfilComponentForm = PerfilComponentForm;
//# sourceMappingURL=perfil.component.form.js.map