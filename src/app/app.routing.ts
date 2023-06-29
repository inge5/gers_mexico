import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MexicoComponent } from './mexico/mexico/mexico.component';
import { CapacitacionMexicoComponent } from './mexico/capacitacion-mexico/capacitacion-mexico.component';
import { InternaCapacitacionMexicoComponent } from './mexico/interna-capacitacion-mexico/interna-capacitacion-mexico.component';
import { ContactenosMxComponent } from './mexico/contactenos-mx/contactenos-mx.component';
import { PensamientoCorporativoMxComponent } from './mexico/nosotros/pensamiento-corporativo-mx/pensamiento-corporativo-mx.component';
import { PoliticaGestionIntegralMxComponent } from './mexico/nosotros/politica-gestion-integral-mx/politica-gestion-integral-mx.component';
import { PruebasAutomatizacionControlMxComponent } from './mexico/servicios/pruebas-automatizacion-control-mx/pruebas-automatizacion-control-mx.component';
import { SmartGridsMxComponent } from './mexico/servicios/smart-grids-mx/smart-grids-mx.component';
import { AnalisisCalidadEnergiaMxComponent } from './mexico/servicios/analisis-calidad-energia-mx/analisis-calidad-energia-mx.component';
import { PlaneacionProyectosMxComponent } from './mexico/servicios/planeacion-proyectos-mx/planeacion-proyectos-mx.component';
import { EstudiosSistemasMxComponent } from './mexico/servicios/estudios-sistemas-mx/estudios-sistemas-mx.component';
import { HomeMxComponent } from './mexico/home-mx/home-mx.component';
import { DisenoIngenieriaMxComponent } from './mexico/servicios/diseno-ingenieria-mx/diseno-ingenieria-mx.component';
import { NeplanMxComponent } from './mexico/representaciones/neplan-mx/neplan-mx.component';
import { BeckwithElectronicMxComponent } from './mexico/representaciones/beckwith-electronic-mx/beckwith-electronic-mx.component';
import { XgslabMxComponent } from './mexico/representaciones/xgslab-mx/xgslab-mx.component';
import { ProyectosMxComponent } from './mexico/proyectos-mx/proyectos-mx.component';
import { PublicacionesMxComponent } from './mexico/publicaciones-mx/publicaciones-mx.component';
import { TrabajeConNosotrosMxComponent } from './mexico/trabaje-con-nosotros-mx/trabaje-con-nosotros-mx.component';
import { VacanteInternaMxComponent } from './mexico/trabaje-con-nosotros-mx/vacante-interna-mx/vacante-interna-mx.component';
import { BuscadorMxComponent } from './mexico/buscador-mx/buscador-mx.component';
import { TerceriasAsesoriasMxComponent } from './mexico/servicios/tercerias-asesorias-mx/tercerias-asesorias-mx.component';
import { PublicacionInternaMxComponent } from './mexico/publicaciones-mx/publicacion-interna-mx/publicacion-interna-mx.component';

let APP_ROUTES: Routes = [];
APP_ROUTES = [
  {
    path: '',
    component: MexicoComponent,
    children: [
      { path: '', component: HomeMxComponent },
      { path: 'capacitaciones', component: CapacitacionMexicoComponent },
      {
        path: 'capacitaciones/:id',
        component: InternaCapacitacionMexicoComponent,
      },
      { path: 'contactenos', component: ContactenosMxComponent },
      {
        path: 'pensamiento-corporativo',
        component: PensamientoCorporativoMxComponent,
      },
      {
        path: 'politica-gestion-integral',
        component: PoliticaGestionIntegralMxComponent,
      },
      {
        path: 'pruebas-automatizacion-y-control',
        component: PruebasAutomatizacionControlMxComponent,
      },
      { path: 'smart-grids', component: SmartGridsMxComponent },
      {
        path: 'analisis-calidad-energia',
        component: AnalisisCalidadEnergiaMxComponent,
      },
      {
        path: 'planeacion-de-proyectos',
        component: PlaneacionProyectosMxComponent,
      },
      {
        path: 'estudios-de-sistemas-electricos',
        component: EstudiosSistemasMxComponent,
      },
      { path: 'diseno-e-ingenieria', component: DisenoIngenieriaMxComponent },
      {
        path: 'tercerias-y-asesorias',
        component: TerceriasAsesoriasMxComponent,
      },
      { path: 'neplan', component: NeplanMxComponent },
      // { path: 'beckwith-electronic', component: BeckwithElectronicMxComponent },
      { path: 'xgslab', component: XgslabMxComponent },
      { path: 'proyectos', component: ProyectosMxComponent },
      { path: 'publicaciones', component: PublicacionesMxComponent },
      { path: 'publicaciones/:slug', component: PublicacionInternaMxComponent },
      {
        path: 'trabaje-con-nosotros',
        component: TrabajeConNosotrosMxComponent,
      },
      { path: 'vacantes/:slug', component: VacanteInternaMxComponent },
      { path: 'buscador', component: BuscadorMxComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {
  onSameUrlNavigation: 'ignore',
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  initialNavigation: 'enabled',
});
