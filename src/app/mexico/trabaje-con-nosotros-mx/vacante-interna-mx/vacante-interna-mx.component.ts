import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacantesMxService } from 'src/app/services/vacantes-mx.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
declare var $:any;

@Component({
  selector: 'app-vacante-interna-mx',
  templateUrl: './vacante-interna-mx.component.html',
  styleUrls: ['./vacante-interna-mx.component.css']
})
export class VacanteInternaMxComponent implements OnInit {
  public interesado: any;

  vacante_data:any = {};
  loader = true;

  constructor(private route: ActivatedRoute, private _vacanteservice:VacantesMxService) { 
    this.interesado = {
      nombres: '',
      apellidos:'',
      email: '',
      telefono:'',
      acepto:'',
      vacante: '',
      ubicacion: 'México'
    };
  }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.interesado.vacante = slug;
    this._vacanteservice.getVacante(slug)
      .subscribe(res => {
        this.loader = false;
        this.vacante_data = res;
        for(let vacante of res){
          this.vacante_data = vacante;
        }
      })
  }

  onChange(file: File){
    this.interesado.archivo = file[0];
  }

  postularme(){
    $("#wrapperInterna").toggleClass("toggled");
    $('.overlaytrabaja').addClass('active');
  }

  public cierraVacante() {
    $('.overlaytrabaja').removeClass('active');
    $("#wrapperInterna").toggleClass("toggled");
  }

  formVacanteInterna(form){
      var paqueteDeDatos = new FormData();
      paqueteDeDatos.append('archivo', this.interesado.archivo);
      paqueteDeDatos.append('nombres', this.interesado.nombres);
      paqueteDeDatos.append('apellidos', this.interesado.apellidos);
      paqueteDeDatos.append('email', this.interesado.email);
      paqueteDeDatos.append('telefono', this.interesado.telefono);
      paqueteDeDatos.append('ubicacion', this.interesado.ubicacion);
      paqueteDeDatos.append('acepto', this.interesado.acepto);
      paqueteDeDatos.append('vacante', this.interesado.vacante) ;
      var destino = `${environment.domain}/wp-content/themes/gers/formulario-vacante-interna-mexico/form-vacante-interna-mexico.php`; // El script que va a recibir los campos de formulario.
            /* Se envia el paquete de datos por ajax. */
      $.ajax({
        url: destino,
        type: 'POST',
        /*
        data: JSON.stringify(this.usuario),
        dataType:"json",
        */
        contentType: false,
        data: paqueteDeDatos, // Al atributo data se le asigna el objeto FormData.
        processData: false,
        cache: false, 
        success: function(data) {
     
          Swal.fire({
            icon: 'success',
            title: 'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
            showConfirmButton: true
          }); 
          form.reset();
   
        }, error: function(error){

          Swal.fire('Oops...', 'Algo pasó. Corrige los errores, por favor!', 'error')
        }
      });
     }
   }
