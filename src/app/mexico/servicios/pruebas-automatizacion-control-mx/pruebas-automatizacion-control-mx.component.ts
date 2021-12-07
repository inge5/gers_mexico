import { Component, OnInit } from '@angular/core';
import { PagesMxService } from 'src/app/services/pages-mx.service';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-pruebas-automatizacion-control-mx',
  templateUrl: './pruebas-automatizacion-control-mx.component.html',
  styleUrls: ['./pruebas-automatizacion-control-mx.component.css']
})
export class PruebasAutomatizacionControlMxComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];
  primer_icono_data: any = {};
  texto_columna_1_data: any = {};
  texto_columna_2_data: any = {};

  constructor(private _pruebasautomatizacioncontrol:PagesMxService, private titulo: Title, private seo: SeoService) { }

  ngOnInit(): void {
    this.titulo.setTitle('En Gers realizamos diseños y suministramos nuestro equipo de pruebas y puestas en equipos de alta, media y baja tensión');
    this.seo.generarTags({
      titulo: 'En Gers realizamos diseños y suministramos nuestro equipo de pruebas y puestas en equipos de alta, media y baja tensión',
      descripcion: 'Contamos con Automatización basado en IEC61850, IEC608070-5-101/104 ',
      imagen: '',
      slug: 'pruebas-automatizacion-y-control',
      keywords: 'Somos expertos en pruebas a transformadores de potencia y bancos cargadores de energia'
    })
    this._pruebasautomatizacioncontrol.getPruebasAutomatizacionControl()
    .subscribe((res:any) => {
      this.loader = false;
      this.seccion_1_data = res.acf.seccion_1;
      this.seccion_iconos_data = res.acf.seccion_iconos;
      this.primer_icono_data = res.acf.primer_icono;
      this.texto_columna_1_data = res.acf.texto_columna_1;
      this.texto_columna_2_data = res.acf.texto_columna_2;
    });
  }

}
