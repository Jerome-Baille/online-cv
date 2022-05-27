import { Component, OnInit } from '@angular/core';
import { faHeart, faRocket } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.scss']
})
export class LandpageComponent implements OnInit {
  lang: any = 'en';
  faRocket = faRocket;
  faHeart = faHeart;

  booki : boolean = false;
  ohMyFood : boolean = false;
  laChouetteAgence : boolean = false;
  kanap : boolean = false;
  piiquante : boolean = false;
  groupomania : boolean = false;

  windowScrolled = false;

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    // check if there is a key "lang" in localStorage
    if(localStorage.getItem('lang')) {
      this.lang = localStorage.getItem('lang');
    } else {
      this.lang = navigator.language;
    }


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

  changeLang(lang: string) {
    switch (lang) {
      case 'fr':
        this.lang = 'fr';
        localStorage.setItem('lang', 'fr');
        break;
      case 'en':
        this.lang = 'en';
        // this.translate.use(lang)
        localStorage.setItem('lang', 'en');
        break;
    }
  }
}
