import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PagesMxService } from '../../../services/pages-mx.service';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-analisis-calidad-energia-mx',
  templateUrl: './analisis-calidad-energia-mx.component.html',
  styleUrls: ['./analisis-calidad-energia-mx.component.css']
})
export class AnalisisCalidadEnergiaMxComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];
  texto_final_data: any = {};

  constructor(private _serviciosenergeticos:PagesMxService, private titulo: Title, private seo: SeoService) { }

  ngOnInit(): void {
    this.titulo.setTitle('En Gers hacemos parte de el portafolio ESCOS  (Empresas de Servicios Energéticos que diseñan, desarrollan, instalan y financian proyectos de eficiencia energética)');
    this.seo.generarTags({
      titulo: 'En Gers hacemos parte de el portafolio ESCOS  (Empresas de Servicios Energéticos que diseñan, desarrollan, instalan y financian proyectos de eficiencia energética)',
      descripcion: 'Somos expertos en chequeos Retie, uso racional de energia y Levantamiento y actualización de diagramas unifilares',
      imagen: '',
      slug: 'analisis-calidad-energia',
      keywords: 'En nuestro servicio nos aseguramos de que todo marche en orden en su proyecto, analizamos los eventos en las señales de potencia y nos aseguramos de entregar un estudio de calidad de energia. '
    })
    this._serviciosenergeticos.getServiciosEnergeticos()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_iconos_data = res.acf.seccion_iconos;
        this.texto_final_data = res.acf.texto_final;
      });
  }

}
