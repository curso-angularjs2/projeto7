import { Component } from '@angular/core';
import { Perfil } from '../class/perfil';
import { PerfilService } from '../service/perfil.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
    selector: 'perfil-form',
    templateUrl: 'app/perfil/templates/perfil.template.form.html'
})
export class PerfilComponentForm implements OnInit {
    errorMessage: string;
    perfil: Perfil;
    private sub: any;

    constructor(private perfilService: PerfilService,
        private router: Router,
        private routeActivated: ActivatedRoute) { }


    salvar(perfil: Perfil) {
        if (!perfil.nome) { return; }
        this.perfilService.salvar(perfil)
            .subscribe(
            perfil => this.router.navigate(['perfil']),
            error => this.errorMessage = <any>error
            );
    }

    ngOnInit(): void {
        this.sub = this.routeActivated.params.subscribe(params => {
            let id = params['id'];
            this.perfil = new Perfil();
            if (id) {
                console.log(id);
                this.perfilService.get(id)
                    .subscribe(
                    perfil => this.perfil = perfil,
                    error => this.errorMessage = <any>error
                    );
            }
            
        });

    }

}
