import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PagesMxService } from '../../../services/pages-mx.service';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-planeacion-proyectos-mx',
  templateUrl: './planeacion-proyectos-mx.component.html',
  styleUrls: ['./planeacion-proyectos-mx.component.css']
})
export class PlaneacionProyectosMxComponent implements OnInit {
  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];

  constructor(private _planeacionproyectos:PagesMxService, private titulo: Title, private seo: SeoService) { }

  ngOnInit(): void {
    this.titulo.setTitle('En Gers te ayudamos en tus proyectos a futuro, cuenta con nosotros para tomar las mejores decisiones');
    this.seo.generarTags({
      titulo: 'En Gers te ayudamos en tus proyectos a futuro, cuenta con nosotros para tomar las mejores decisiones',
      descripcion: 'Nuestros proyectos van de la mano con estudios de factibilidad e impacto ambiental que aseguran un resultado beneficioso para todos',
      imagen: '',
      slug: 'planeacion-de-proyectos',
      keywords: 'En gers encuentra tambien ayuda en la estimación de costos y gerencia de proyectos, que esperas para contactarnos'
    })
    this._planeacionproyectos.getPlaneacionProyectos()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_iconos_data = res.acf.seccion_iconos;
      });
  }

}
