import { Component, OnInit } from '@angular/core';
import { PagesMxService } from 'src/app/services/pages-mx.service';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-xgslab-mx',
  templateUrl: './xgslab-mx.component.html',
  styleUrls: ['./xgslab-mx.component.css']
})
export class XgslabMxComponent implements OnInit {

  loader = true;
  banner_data : any = {};
  seccion_1_data : any = {};
  seccion_2_data: any = {};
  modulo_data: any[] = [];
  seccion_3_data: any = {};

  constructor(private _xgslab:PagesMxService, private titulo: Title, private seo: SeoService) { }

  ngOnInit(): void {
    this.titulo.setTitle('Con XGSLAB ofrecemos uno de los softwares mas potentes para el analisis de sistemas de puesta a tierra y de campos electromagneticos');
    this.seo.generarTags({
      titulo: 'Con XGSLAB ofrecemos uno de los softwares mas potentes para el analisis de sistemas de puesta a tierra y de campos electromagneticos',
      descripcion: 'Este software es el unico en el mercado que tiene la consideracion de sus estadisticas normas tanto como IEEE como EN',
      imagen: '',
      slug: 'xgslab',
      keywords: 'XGSLAB cuenta con 3 distintos modulos como lo son el GSA: ANÁLISIS DE SISTEMAS DE PUESTA A TIERRA, El GSA_FD: ANÁLISIS DE SISTEMAS DE PUESTA A TIERRA EN EL DOMINIO DE LA FRECUENCIA y el XGSA_FD: ANÁLISIS DE SISTEMAS AÉREOS Y SUBTERRÁNEOS EN EL DOMINIO DE LA FRECUENCIA'
    })
    this._xgslab.getXGSLab()
      .subscribe((res:any) => {
        this.loader = false;
        this.banner_data = res.acf.banner;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_2_data = res.acf.seccion_2;
        this.modulo_data = res.acf.seccion_2.modulo;
        this.seccion_3_data = res.acf.seccion_3;
      });
  }

}
