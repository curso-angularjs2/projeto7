import { Component, OnInit } from '@angular/core';
import { Perfil } from '../class/perfil';
import { PerfilService } from '../service/perfil.service';


@Component({
    selector: 'perfil',
    templateUrl: 'app/perfil/templates/perfil.template.html'
})
export class PerfilComponent implements OnInit {
    public perfis: Perfil[];
    errorMessage: string;
    public i: number;

    constructor(private perfilService: PerfilService) { }

    getList(): void {
        this.perfilService.fetchAll()
            .subscribe(
            perfis => this.perfis = perfis,
            error => this.errorMessage = <any>error);

    }

    deletar(id, i) {
        this.i = i;
        this.perfilService.deletar(id)
            .subscribe(
            success => this.perfis.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

    ngOnInit(): void {
        this.getList();
    }
}