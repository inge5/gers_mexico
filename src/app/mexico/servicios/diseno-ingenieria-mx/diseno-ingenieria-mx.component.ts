import { Component, OnInit } from '@angular/core';
import { PagesMxService } from 'src/app/services/pages-mx.service';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-diseno-ingenieria-mx',
  templateUrl: './diseno-ingenieria-mx.component.html',
  styleUrls: ['./diseno-ingenieria-mx.component.css']
})
export class DisenoIngenieriaMxComponent implements OnInit {

  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];
  item_tab_data: any[] = [];
  texto_columna_1_data:any = {};
  texto_columna_2_data:any = {};
  public activePillIndex:number = 0;

  constructor(private disenoingenieria:PagesMxService, private titulo: Title, private seo: SeoService) { }

  ngOnInit(): void {
    this.titulo.setTitle('En Gers realizamos diseños conceptuales, basicos o de detalle para tu proyecto garantizando los resultados mas optimos');
    this.seo.generarTags({
      titulo: 'En Gers realizamos diseños conceptuales, basicos o de detalle para tu proyecto garantizando los resultados mas optimos',
      descripcion: 'Diseñamos subestaciones electricas, lineas de distribucion y sistemas industriales y comerciales contando con mas de 30 años de experiencia',
      imagen: '',
      slug: 'diseno-e-ingenieria',
      keywords: 'Gers te ayuda con la interventoria de tus proyectos y los desarrollos de redes de datos: Lan, WLAN y redes multimedia'
    })
    this.disenoingenieria.getDisenoIngenieria()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_iconos_data = res.acf.seccion_iconos;
        this.item_tab_data = res.acf.item_tab;
        this.texto_columna_1_data = res.acf.texto_columna_1;
        this.texto_columna_2_data = res.acf.texto_columna_2;
      });
  }

  public selectPill(index:number) {
    this.activePillIndex = index;
    // do some other stuff if necessary...
   }

}
