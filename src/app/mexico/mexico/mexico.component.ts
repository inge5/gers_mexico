import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
declare function mainFunction();

@Component({
  selector: 'app-mexico',
  templateUrl: './mexico.component.html',
  styleUrls: ['./mexico.component.css']
})
export class MexicoComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformid) { }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformid)){
      
      mainFunction();
    }
  }

}
