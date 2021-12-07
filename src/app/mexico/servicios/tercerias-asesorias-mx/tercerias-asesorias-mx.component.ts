import { Component, OnInit } from '@angular/core';
import { PagesMxService } from 'src/app/services/pages-mx.service';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../../../services/seo.service';


@Component({
  selector: 'app-tercerias-asesorias-mx',
  templateUrl: './tercerias-asesorias-mx.component.html',
  styleUrls: ['./tercerias-asesorias-mx.component.css']
})
export class TerceriasAsesoriasMxComponent implements OnInit {

  loader = true;
  seccion_1_data: any = {};
  seccion_iconos_data: any[] = [];

  constructor(private interventoriasasesorias:PagesMxService, private titulo: Title, private seo: SeoService) { }

  ngOnInit(): void {
    this.titulo.setTitle('Nos encargamos de la interventoria de diseños y montajes para obras industriales y comerciales');
    this.seo.generarTags({
      titulo: 'Nos encargamos de la interventoria de diseños y montajes para obras industriales y comerciales',
      descripcion: 'Nos regimos bajo las normas nacionales e internacioles para guiar tu proyecto por el mejor camino con nuestra etapa de planeacion, estudio y purebas',
      imagen: '',
      slug: 'tercerias-y-asesorias',
      keywords: 'Nos regimos bajo las normas nacionales e internacioles para guiar tu proyecto por el mejor camino con nuestra etapa de planeacion, estudio y purebas'
    })
    this.interventoriasasesorias.getInterventoriaAsesoria()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion_1_data = res.acf.seccion_1;
        this.seccion_iconos_data = res.acf.seccion_iconos;
      });
  }

}
