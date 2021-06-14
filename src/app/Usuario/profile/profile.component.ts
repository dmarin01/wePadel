import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interface/cliente.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formulario: FormGroup;
  user: Cliente;

  constructor(private usuariosService: UsuariosService, private activatedRoute: ActivatedRoute) {

    this.formulario = new FormGroup({
      id: new FormControl(),
      username: new FormControl(),
      nombre: new FormControl(),
      apellidos: new FormControl(),
      direccion: new FormControl(),
      nivel: new FormControl(),
      telefono: new FormControl(),
      email: new FormControl(),
      edad: new FormControl(),
      fecha_registro: new FormControl(),
    })
  }




  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      const routeID = params.id;

      this.user = await this.usuariosService.getUser(routeID);
      console.log(this.user);
      this.formulario = new FormGroup({
        id: new FormControl(this.user.id),
        username: new FormControl(this.user.username),
        nombre: new FormControl(this.user.nombre),
        apellidos: new FormControl(this.user.apellidos),
        direccion: new FormControl(this.user.direccion),
        nivel: new FormControl(this.user.nivel),
        telefono: new FormControl(this.user.telefono),
        email: new FormControl(this.user.email),
        edad: new FormControl(this.user.edad),
        fecha_registro: new FormControl(),
      })
    })



  }

  //formulario del usuario
  async onSubmit() {

    const userUpdate = await this.usuariosService.updateUser(this.formulario.value)
    return userUpdate;

  }

}
