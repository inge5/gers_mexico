import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SeoService } from '../../services/seo.service';
declare function mainFunction();

@Component({
  selector: 'app-mexico',
  templateUrl: './mexico.component.html',
  styleUrls: ['./mexico.component.css']
})
export class MexicoComponent implements OnInit {

  constructor(private seo: SeoService, @Inject(PLATFORM_ID) private platformid) { }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformid)){
      this.seo.cambiarTitulo('GERS - México');
      mainFunction();
    }
  }

}
