import { Component, OnInit } from '@angular/core';
import { faHeart, faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.scss']
})
export class LandpageComponent implements OnInit {
  faRocket = faRocket;
  faHeart = faHeart;

  booki : boolean = false;
  ohMyFood : boolean = false;
  laChouetteAgence : boolean = false;
  kanap : boolean = false;
  piiquante : boolean = false;
  groupomania : boolean = false;

  windowScrolled = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }

  // Scroll to the top of the page on click
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  load(src: string) {
    switch (src) {
      case 'booki':
        this.booki = !this.booki;
        this.ohMyFood = false;
        this.laChouetteAgence = false;
        this.kanap = false;
        this.piiquante = false;
        this.groupomania = false;
        break;
      case 'ohMyFood':
        this.ohMyFood = !this.ohMyFood;
        this.booki = false;
        this.laChouetteAgence = false;
        this.kanap = false;
        this.piiquante = false;
        this.groupomania = false;
        break;
      case 'laChouetteAgence':
        this.laChouetteAgence = !this.laChouetteAgence;
        this.booki = false;
        this.ohMyFood = false;
        this.kanap = false;
        this.piiquante = false;
        this.groupomania = false;
        break;
      case 'kanap':
        this.kanap = !this.kanap;
        this.booki = false;
        this.ohMyFood = false;
        this.laChouetteAgence = false;
        this.piiquante = false;
        this.groupomania = false;
        break;
      case 'piiquante':
        this.piiquante = !this.piiquante;
        this.booki = false;
        this.ohMyFood = false;
        this.laChouetteAgence = false;
        this.kanap = false;
        this.groupomania = false;
        break;
      case 'groupomania':
        this.groupomania = !this.groupomania;
        this.booki = false;
        this.ohMyFood = false;
        this.laChouetteAgence = false;
        this.kanap = false;
        this.piiquante = false;
    }
  }

  triggeredFromChildren(eventData: any) {
    if(eventData == 'close') {
      this.booki = false;
      this.ohMyFood = false;
      this.laChouetteAgence = false;
      this.kanap = false;
      this.piiquante = false;
      this.groupomania = false;
    }
  }
}
