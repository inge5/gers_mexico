import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PagesMxService } from '../../../services/pages-mx.service';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-estudios-sistemas-mx',
  templateUrl: './estudios-sistemas-mx.component.html',
  styleUrls: ['./estudios-sistemas-mx.component.css']
})
export class EstudiosSistemasMxComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];
  item_tab_data: any[] = [];
  texto_columna_1_data: any = {};
  texto_columna_2_data: any = {};
  public activePillIndex:number = 0;

  constructor(private _estudiosistemaselectricos:PagesMxService, private titulo: Title, private seo: SeoService) { }

  ngOnInit(): void {
    this.titulo.setTitle('Nos encargamos de los estudios de sistemas electricos para electrificadoras, plantas industriales, mineras y petroleras Cotiza ahora aquí ');
    this.seo.generarTags({
      titulo: 'Nos encargamos de los estudios de sistemas electricos para electrificadoras, plantas industriales, mineras y petroleras Cotiza ahora aquí ',
      descripcion: 'Nuestro equipo cuenta con personal altamente capacitado para realizar nuestro estudios sistemicos en redes electricas nacionales e internacionales. ',
      imagen: '',
      slug: 'estudios-de-sistemas-electricos',
      keywords: 'Realizamos planeaciones de sistemas electricos y estudios de conexión para proyectos con energias convencionales y no convencionales '
    })
    this._estudiosistemaselectricos.getEstudioSistemasElectricos()
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
