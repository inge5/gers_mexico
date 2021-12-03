import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { RouterModule } from '@angular/router';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { APP_ROUTING } from './app.routing';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularPaginatorModule } from 'angular-paginator';
import { OwlModule } from 'ngx-owl-carousel';
import {NgxPaginationModule} from 'ngx-pagination';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';// a plugin!
import listPlugin from '@fullcalendar/list';
import { CharPipe } from './pipes/char.pipe';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  listPlugin
]);
import { CapacitacionMexicoComponent } from './mexico/capacitacion-mexico/capacitacion-mexico.component';
import { InternaCapacitacionMexicoComponent } from './mexico/interna-capacitacion-mexico/interna-capacitacion-mexico.component';
import { MexicoComponent } from './mexico/mexico/mexico.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ContactenosMxComponent } from './mexico/contactenos-mx/contactenos-mx.component';
import { PensamientoCorporativoMxComponent } from './mexico/nosotros/pensamiento-corporativo-mx/pensamiento-corporativo-mx.component';
import { TopbarMxComponent } from './mexico/topbar-mx/topbar-mx.component';
import { MenuPrincipalMxComponent } from './mexico/menu-principal-mx/menu-principal-mx.component';
import { PoliticaGestionIntegralMxComponent } from './mexico/nosotros/politica-gestion-integral-mx/politica-gestion-integral-mx.component';
import { PruebasAutomatizacionControlMxComponent } from './mexico/servicios/pruebas-automatizacion-control-mx/pruebas-automatizacion-control-mx.component';
import { SmartGridsMxComponent } from './mexico/servicios/smart-grids-mx/smart-grids-mx.component';
import { AnalisisCalidadEnergiaMxComponent } from './mexico/servicios/analisis-calidad-energia-mx/analisis-calidad-energia-mx.component';
import { PlaneacionProyectosMxComponent } from './mexico/servicios/planeacion-proyectos-mx/planeacion-proyectos-mx.component';
import { EstudiosSistemasMxComponent } from './mexico/servicios/estudios-sistemas-mx/estudios-sistemas-mx.component';
import { HomeMxComponent } from './mexico/home-mx/home-mx.component';
import { FooterMxComponent } from './mexico/footer-mx/footer-mx.component';
import { DisenoIngenieriaMxComponent } from './mexico/servicios/diseno-ingenieria-mx/diseno-ingenieria-mx.component';
import { TerceriasAsesoriasMxComponent } from './mexico/servicios/tercerias-asesorias-mx/tercerias-asesorias-mx.component';
import { NeplanMxComponent } from './mexico/representaciones/neplan-mx/neplan-mx.component';
import { BeckwithElectronicMxComponent } from './mexico/representaciones/beckwith-electronic-mx/beckwith-electronic-mx.component';
import { XgslabMxComponent } from './mexico/representaciones/xgslab-mx/xgslab-mx.component';
import { ProyectosMxComponent } from './mexico/proyectos-mx/proyectos-mx.component';
import { PublicacionesMxComponent } from './mexico/publicaciones-mx/publicaciones-mx.component';
import { MenuVerticalMxComponent } from './mexico/menu-vertical-mx/menu-vertical-mx.component';
import { TrabajeConNosotrosMxComponent } from './mexico/trabaje-con-nosotros-mx/trabaje-con-nosotros-mx.component';
import { VacanteInternaMxComponent } from './mexico/trabaje-con-nosotros-mx/vacante-interna-mx/vacante-interna-mx.component';

import es from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { BuscadorMxComponent } from './mexico/buscador-mx/buscador-mx.component';
import { PublicacionInternaMxComponent } from'./mexico/publicaciones-mx/publicacion-interna-mx/publicacion-interna-mx.component';
import { SafeHtmlPipe } from './mexico/home-mx/home-mx.component';
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe,
    CharPipe,
    CharPipe,
    CapacitacionMexicoComponent,
    InternaCapacitacionMexicoComponent,
    MexicoComponent,
    ContactenosMxComponent,
    PensamientoCorporativoMxComponent,
    TopbarMxComponent,
    MenuPrincipalMxComponent,
    PoliticaGestionIntegralMxComponent,
    PruebasAutomatizacionControlMxComponent,
    SmartGridsMxComponent,
    AnalisisCalidadEnergiaMxComponent,
    PlaneacionProyectosMxComponent,
    EstudiosSistemasMxComponent,
    HomeMxComponent,
    FooterMxComponent,
    DisenoIngenieriaMxComponent,
    TerceriasAsesoriasMxComponent,
    NeplanMxComponent,
    BeckwithElectronicMxComponent,
    XgslabMxComponent,
    ProyectosMxComponent,
    PublicacionesMxComponent,
    MenuVerticalMxComponent,
    TrabajeConNosotrosMxComponent,
    VacanteInternaMxComponent,
    FilterPipe,
    BuscadorMxComponent,
    PublicacionInternaMxComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    IvyCarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AngularPaginatorModule,
    NgxSkeletonLoaderModule.forRoot(),
    APP_ROUTING,
    OwlModule,
    NgxPaginationModule,
    FullCalendarModule,
    NgxCaptchaModule
  ],
  exports: [RouterModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
