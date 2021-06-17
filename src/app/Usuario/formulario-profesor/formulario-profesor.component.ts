import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfesoresService } from 'src/app/services/profesores.service';

declare var Swal;

@Component({
  selector: 'app-formulario-profesor',
  templateUrl: './formulario-profesor.component.html',
  styleUrls: ['./formulario-profesor.component.css']
})
export class FormularioProfesorComponent implements OnInit {
  formulario: FormGroup;

  constructor(private profesoresServices: ProfesoresService, private router: Router) {
    this.formulario = new FormGroup({
      id: new FormControl(),
      experiencia: new FormControl(),
      precio: new FormControl(),
      material_propio: new FormControl(),
      niveles: new FormControl(),
      desplazamiento: new FormControl(),
      instalacion_propia: new FormControl(),
    })
  }

  ngOnInit(): void {
  }
  async onSubmit() {
    console.log(this.formulario.value.id);
    try {
      const response = await this.profesoresServices.formteacher(this.formulario.value);
      if (response['affectedRows'] === 1) {
        Swal.fire('Te has registrado como profesor');
        this.formulario.reset();
        this.router.navigate(['/user', response['id']])//o navigate(['/profesores',response['fk_usuarios']
      }
      if (response['error']) {
        Swal.fire('Ha ocurrido un error', response['error'], 'error')
      }
    } catch (err) {
      console.log(err)
    }
  }

}