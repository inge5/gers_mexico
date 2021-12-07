import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Seo } from '../interfaces/config-seo';
@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta) { }

  generarTags(config: Seo) {
    config = {
      titulo: 'GERS',
      descripcion: 'Mi descripcion gers',
      imagen: '',
      slug: '',
      keywords: '',
      ...config
    }
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@gers_sa' });
    this.meta.updateTag({ name: 'twitter:title', content: config.titulo });
    this.meta.updateTag({ name: 'twitter:description', content: config.descripcion });
    this.meta.updateTag({ name: 'twitter:image', content: config.imagen });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'GERS México' });
    this.meta.updateTag({ property: 'og:title', content: config.titulo });
    this.meta.updateTag({ property: 'og:description', content: config.descripcion });
    this.meta.updateTag({ property: 'og:image', content: config.imagen });
    this.meta.updateTag({ property: 'og:url', content: `${environment.domain_angular}/#/${config.slug}` })
    this.meta.updateTag({name: 'keywords', content: config.keywords });
  }
}
