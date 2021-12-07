import { Component, OnInit } from '@angular/core';
import { PagesMxService } from 'src/app/services/pages-mx.service';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-neplan-mx',
  templateUrl: './neplan-mx.component.html',
  styleUrls: ['./neplan-mx.component.css']
})
export class NeplanMxComponent implements OnInit {
  loader = true;
  banner_data : any = {};
  item_tab_data: any[] = [];
  repetidor_botones_data: any[] = [];
  info_data: any = {};
  public activePillIndex:number = 0;

  constructor(private _neplan:PagesMxService, private titulo: Title, private seo: SeoService) { }

  ngOnInit(): void {
    this.titulo.setTitle('Encuentra en GERS nuestro Software de análisis de sistemas de potencia Licencias en la nube o en la intranet según las necesidades de los usuarios');
    this.seo.generarTags({
      titulo: 'Encuentra en GERS nuestro Software de análisis de sistemas de potencia Licencias en la nube o en la intranet según las necesidades de los usuarios',
      descripcion: 'Con NEPLAN puedes realizar diferentes analisis sobre un concepto modular ofreciendo funcionalidades de vanguardia sobre un entorno grafico',
      imagen: '',
      slug: 'neplan',
      keywords: 'En nuestro editor grafico de NEPLAN podras ver el flujo de carga, la simulación dinamica y el cortocircuito porporcionando calculos de posibles fallas'
    })
    this._neplan.getNeplan()
      .subscribe((res:any) => {
        this.loader = false;
        this.banner_data = res.acf.banner;
        this.item_tab_data = res.acf.item_tab;
        this.repetidor_botones_data = res.acf.item_tab.repetidor_botones;
        this.info_data = res.acf.informacion_general;
      });
  }

  public selectPill(index:number) {
    this.activePillIndex = index;
    // do some other stuff if necessary...
   }

}
