import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VacantesMxService } from 'src/app/services/vacantes-mx.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-trabaje-con-nosotros-mx',
  templateUrl: './trabaje-con-nosotros-mx.component.html',
  styleUrls: ['./trabaje-con-nosotros-mx.component.css']
})
export class TrabajeConNosotrosMxComponent implements OnInit {
  public usuario: any;

  loader = true;
  vacantes_data: any[];
  categorias: any[] = [];
  horarioVacante: any[];
  filtrar: any[];
  vacantes_dataTemp: any;
  horarioVacanteTemp: any[];
  bandera: boolean = false;

  constructor(private _router: Router, private _vacantesservice: VacantesMxService) {
    this.usuario = {
      nombres: '',
      apellidos: '',
      email: '',
      telefono: '',
      ubicacion: 'México',
      categoria: '',
      acepto: ''
    };
  }

  ngOnInit(): void {
    this.getVacantes();
    this.getCategoriasFiltro();
  }

  changeFile(file:File){
    this.usuario.archivo = file[0];
  }

  getVacantes() {
    if (!this.vacantes_data) {
      this._vacantesservice.getVacantes()
        .subscribe((res: any) => {
          this.loader = false;
          this.vacantes_data = res;


          let horarioVacante = [];
          let horarioVacanteMap = [];
          res.forEach(element => {
            horarioVacante.push({
              horario_vacante: element.acf.horario_vacante,
              bandera: false
            })
          });
          horarioVacanteMap = horarioVacante.map(item => [item.horario_vacante, item]);

          let horarioVacanteMapArr = new Map(horarioVacanteMap);

          let unicosHorarioVacante = [...horarioVacanteMapArr.values()];

          this.horarioVacante = unicosHorarioVacante;

        })
    } else {
      let horarioVacante = [];
          let horarioVacanteMap = [];
          this.vacantes_data.forEach(element => {
            horarioVacante.push({
              horario_vacante: element.acf.horario_vacante,
              bandera: false
            })
          });
        horarioVacanteMap = horarioVacante.map(item => [item.horario_vacante, item]);

      let horarioVacanteMapArr = new Map(horarioVacanteMap);

      let unicosHorarioVacante = [...horarioVacanteMapArr.values()];

      this.horarioVacante = unicosHorarioVacante;
    }

  }

  getCategoriasFiltro() {
    this._vacantesservice.getCategoriasVacantes().subscribe((resp: any) => {

      resp.forEach(element => {
        element.bandera = false
      });
      this.categorias.push(...resp)
   
    })
  }

  categoriasFiltro(categoriaSelec: any = null) {
    this.filtrar = [];
    if (!this.vacantes_dataTemp || this.vacantes_dataTemp === this.vacantes_data) {
      this.vacantes_dataTemp = this.vacantes_data;
    }
    this.vacantes_dataTemp.forEach(element => {
      this.categorias.forEach(filtro => {
        element.categoria_vacantes.filter(filtroCate => {
          if (filtro.bandera && filtro.id === filtroCate) {
            this.filtrar.push(element);
          }

        });
      })
    })
    this.vacantes_dataTemp.forEach(element => {
      this.horarioVacante.forEach(filtro => {
        if(filtro.bandera && element.acf.horario_vacante === filtro.horario_vacante){
          if(!this.bandera){

            this.filtrar = [];
          }
          this.bandera = true;
          this.filtrar.push(element);
        }
      })
    })

    if (this.filtrar.length > 0) {

      this.vacantes_data = this.filtrar;

   
      if(!this.bandera){

        this.getVacantes();
      }
      this.bandera = false;
    } else  if(this.filtrar.length === 0 && categoriaSelec.bandera){
      this.vacantes_data = [];
      this.bandera = false;
    }else{
      this.vacantes_data = this.vacantes_dataTemp;
      this.bandera = false;

      this.getVacantes();
    }
  }

  enviaCurriculum() {
    $("#wrapper").toggleClass("toggled");
    $('.overlaytrabaja').addClass('active');
  }

  public cierraTrabajemos() {
    $('.overlaytrabaja').removeClass('active');
    $("#wrapper").toggleClass("toggled");
  }

  verVacantes(slug: string) {
    this._router.navigate(['/vacantes', slug]);
  }

  formTrabajeNosotros(form) {
    var paqueteDeDatos = new FormData();
    paqueteDeDatos.append('archivo', this.usuario.archivo);
    paqueteDeDatos.append('nombres', this.usuario.nombres);
    paqueteDeDatos.append('apellidos', this.usuario.apellidos);
    paqueteDeDatos.append('email', this.usuario.email);
    paqueteDeDatos.append('telefono', this.usuario.telefono);
    paqueteDeDatos.append('ubicacion', this.usuario.ubicacion);
    paqueteDeDatos.append('categoria', this.usuario.categoria);
    paqueteDeDatos.append('acepto', this.usuario.acepto);
    $.ajax({
      url: `${environment.domain}/wp-content/themes/gers/formulario-vacantes-general-mexico/form-vacantes-general-mexico.php`,
      type: 'POST',
      data: paqueteDeDatos,
      contentType: false,
      processData: false,
      cache: false,
      // dataType: "json",
      success: function (data) {

      }, error: function (error) {
        if (error.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
            showConfirmButton: true
          });

          form.reset();
        } else {
          Swal.fire('Oops...', 'Algo pasó. Corrige los errores, por favor!', 'error')
        }
      }
    });
  }


}
