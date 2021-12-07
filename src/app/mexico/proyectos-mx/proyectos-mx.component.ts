import { Component, OnInit } from '@angular/core';
import { PagesMxService } from 'src/app/services/pages-mx.service';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-proyectos-mx',
  templateUrl: './proyectos-mx.component.html',
  styleUrls: ['./proyectos-mx.component.css']
})
export class ProyectosMxComponent implements OnInit {
  FeaturedProyects:any[] = [];
  titulo_pagina_data: any;

  loader = true;

  constructor(private _proyectosService:PagesMxService, private titulo: Title, private seo: SeoService) { }

  ngOnInit(): void {
    this.titulo.setTitle('Estos son los proyectos que han confiado en GERS y sus grandes resultados. ');
    this.seo.generarTags({
      titulo: 'Estos son los proyectos que han confiado en GERS y sus grandes resultados. ',
      descripcion: 'Innovamos para alcanzar el éxito de los proyectos que nos han confiado en mas de 20 paises alrededor del mundo',
      imagen: '',
      slug: 'proyectos',
      keywords: 'Nuestros resultados hablan por nuestro trabajo, contamos con una vasta experiencia con mas de 20 proyectos alrededor del mundo'
    })
    this._proyectosService.getProyectos()
      .subscribe((res:any) => {
        this.loader = false;
        this.FeaturedProyects = res;
      });  
      this._proyectosService.getProyectosPagina()
      .subscribe((res:any) => {
        this.loader = false;
        this.titulo_pagina_data = res.acf.titulo_pagina;
      });  
  }

}
