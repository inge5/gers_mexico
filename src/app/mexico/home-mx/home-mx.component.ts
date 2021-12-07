import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';
import { HomeMxService } from '../../services/home-mx.service';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../../services/seo.service';

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    // return this.sanitized.bypassSecurityTrustHtml(value);
    switch (type) {
      case 'html': return this.sanitized.bypassSecurityTrustHtml(value);
      case 'style': return this.sanitized.bypassSecurityTrustStyle(value);
      case 'script': return this.sanitized.bypassSecurityTrustScript(value);
      case 'url': return this.sanitized.bypassSecurityTrustUrl(value);
      case 'resourceUrl': return this.sanitized.bypassSecurityTrustResourceUrl(value);
      default: throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}

@Component({
  selector: 'app-home-mx',
  templateUrl: './home-mx.component.html',
  styleUrls: ['./home-mx.component.css']
})
export class HomeMxComponent implements OnInit {

  loader = true;

  sliderprincipal_data:any = [];
  generando_soluciones_data:any[] = [];
  proyectos_realizados_data:any[] = [];
  titulo_servicios_eficientes_data:any[] = [];
  servicios_eficientes_data:any[] = [];
  ejecucion_de_monitoreo_data:any[] = [];
  tabs_data:any[] = [];
  titulo_marcas_data:any[] = [];
  marcas_datas:any[] = [];
  Images:any[] = [];
  tituloproyectos:any[] = [];
  FeaturedProyects:any[] = [];
  tituloInternacional:any[] = [];
  paisesInternacionales:any[] = [];
  nuestrosClientes:any[] = [];
  equipoTrabajo:any[] = [];
  vacantes:any[] = [];

  constructor(private _sanitizer: DomSanitizer, private _homeService:HomeMxService, private titulo: Title, private seo: SeoService) { 
  }

  ngOnInit(): void {
    this.titulo.setTitle('Nuestro mayor compromiso es ofrecer un servicio eficiente y confiable ajustandonos a tus proyectos');
    this.seo.generarTags({
      titulo: 'Nuestro mayor compromiso es ofrecer un servicio eficiente y confiable ajustandonos a tus proyectos',
      descripcion: 'Nuestros servicios de Pruebas, automatizacion y control, diseño e ingenieria y los estudios de sistemas electricos nos han posicionado en el mercado por mas de 30 años',
      imagen: '',
      slug: '',
      keywords: 'Ejecutamos y monitoriamos la calidad de potencia y energia en tus proyectos y sistemas industriales / Encuentra en GERS soluciones confiables'
    })
    this._homeService.getHome()
      .subscribe((res:any) => {
        this.loader = false;
        this.sliderprincipal_data = this._sanitizer.bypassSecurityTrustHtml(res);
        this.sliderprincipal_data = this.sliderprincipal_data.changingThisBreaksApplicationSecurity;

        this.generando_soluciones_data = res.acf.generando_soluciones;
        this.proyectos_realizados_data = res.acf.proyectos_realizados; 
        this.titulo_servicios_eficientes_data = res.acf.titulo_servicios_eficientes; 
        this.servicios_eficientes_data = res.acf.servicios_eficientes; 
        this.ejecucion_de_monitoreo_data = res.acf.ejecucion_de_monitoreo; 
        this.tabs_data = res.acf.tabs;
        this.titulo_marcas_data = res.acf.titulo_marcas;
        this.marcas_datas = res.acf.marcas;
        this.tituloproyectos = res.acf.titulo_proyectos;
        this.tituloInternacional = res.acf.titulo_contactos_internacionales;
        this.paisesInternacionales = res.acf.paises_internacionales;
        this.nuestrosClientes = res.acf.clientes;
        this.equipoTrabajo = res.acf.equipo_de_trabajo;
        this.vacantes = res.acf.vacantes;
      });
      this._homeService.getProyects()
      .subscribe((res:any) => {
        this.FeaturedProyects = res;
      });  
    }
  }
