import { Component, OnInit } from '@angular/core';
import { PagesMxService } from 'src/app/services/pages-mx.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
declare var $ : any; 

@Component({
  selector: 'app-contactenos-mx',
  templateUrl: './contactenos-mx.component.html',
  styleUrls: ['./contactenos-mx.component.css']
})
export class ContactenosMxComponent implements OnInit {

  public user: any;
  loader = true;

  seccion_1_data: any = {};
  pais_info_data : any [] = [];
  ciudad_principal_data: any[] = [];
  info_ciudad_data: any[] = [];

  constructor(private _contactenos: PagesMxService) {
    this.user = {
      servicio: '',
      nombre: '',
      telefono: '',
      ciudad: '',
      empresa: '',
      asunto: '',
      acepto: '',
      pais: 'México'
    };
   }

  ngOnInit(): void {
    this._contactenos.getContactenos()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.pais_info_data = res.acf.pais_info;
        this.ciudad_principal_data = res.acf.ciudad_info;
        this.info_ciudad_data = res.acf.pais_info.info_ciudad_data;
      });
  }
  enviarForm(form) {
    $.ajax({
      url: `${environment.domain}/wp-content/themes/gers/formulario-contacto-mexico/form-contactenos-mexico.php`,
      type: 'POST',
      data: JSON.stringify(this.user),
      dataType:"json",
      success: function(data) {

       
      }, error: function(error){
        if(error.status === 200){
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
