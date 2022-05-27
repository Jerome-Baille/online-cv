import { Component, Input, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() lang!: string;
  
  faGithub = faGithub;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  // panelOpenState: boolean = false;
  // bookiPanel: boolean = false;
  // ohMyFoodPanel: boolean = false;
  // laChouetteAgencePanel: boolean = false;
  // kanapPanel: boolean = false;
  // piiquantePanel : boolean = false;
  // groupomaniaPanel: boolean = false;

  projectsArray: any = [];


  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.lang === 'fr') {
      fetch('./assets/i18n/fr.json').then(res => res.json())
      .then(jsonData => {
        this.projectsArray = jsonData.projects;
      });
    } else {
      fetch('./assets/i18n/en.json').then(res => res.json())
      .then(jsonData => {
        this.projectsArray = jsonData.projects;
      });
    }
  }

  openDialog(src: string) {
    switch (src) {
      case 'bookiDesktop':
        this.dialog.open(bookiDesktop);
        break;
      case 'bookiMobile':
        this.dialog.open(bookiMobile);
        break;
      case 'ohMyFoodAccueil':
        this.dialog.open(ohMyFoodAccueil);
        break;
      case 'ohMyFoodMenu':
        this.dialog.open(ohMyFoodMenu);
        break;
      case 'laChouetteAgenceAccueilOriginal':
        this.dialog.open(laChouetteAgenceAccueilOriginal);
        break;
      case 'laChouetteAgenceAccueilModified':
        this.dialog.open(laChouetteAgenceAccueilModified);
        break;
      case 'laChouetteAgenceContactOriginal':
        this.dialog.open(laChouetteAgenceContactOriginal);
        break;
      case 'laChouetteAgenceContactModified':
        this.dialog.open(laChouetteAgenceContactModified);
        break;
      case 'kanapListOfProducts':
        this.dialog.open(kanapListOfProducts);
        break;
      case 'kanapSinglePage':
        this.dialog.open(kanapSinglePage);
        break;
      case 'kanapCart':
        this.dialog.open(kanapCart);
        break;
      case 'kanapOrderConfirmation':
        this.dialog.open(kanapOrderConfirmation);
        break;
      case 'piiquanteRegister':
        this.dialog.open(piiquanteRegister);
        break;
      case 'piiquanteListOfProducts':
        this.dialog.open(piiquanteListOfSauces);
        break;
      case 'piiquanteSinglePage':
        this.dialog.open(piiquanteSinglePage);
        break;
      case 'piiquanteNewSauce':
        this.dialog.open(piiquanteNewSauce);
        break;
      case 'groupomaniaIndex':
        this.dialog.open(groupomaniaIndex);
        break;
      case 'groupomaniaSinglePage':
        this.dialog.open(groupomaniaSinglePage);
        break;
      case 'groupomaniaProfile': 
        this.dialog.open(groupomaniaProfile);
        break;
      case 'groupomaniaListOfPosts':
        this.dialog.open(groupomaniaListOfPosts);
        break;
      case 'groupomaniaAdmin':
        this.dialog.open(groupomaniaAdmin);
        break;
    }
  }
  

  // closePanel(src: any) {
  //   console.log(src);
  //   src = !src;
  //   src == 'bookiPanel' ? this.projectsArray.boolean = !this.projectsArray.boolean : null;
  //   src == 'ohMyFoodPanel' ? this.ohMyFoodPanel = !this.ohMyFoodPanel : null;
  //   src == 'laChouetteAgencePanel' ? this.laChouetteAgencePanel = !this.laChouetteAgencePanel : null;
  //   src == 'kanapPanel' ? this.kanapPanel = !this.kanapPanel : null;
  //   src == 'piiquantePanel' ? this.piiquantePanel = !this.piiquantePanel : null;
  //   src == 'groupomaniaPanel' ? this.groupomaniaPanel = !this.groupomaniaPanel : null;
  // }
}


@Component({
  selector: 'app-booki-desktop',
  templateUrl: './dialog/booki-desktop.html',
})
export class bookiDesktop {}

@Component({
  selector: 'app-booki-mobile',
  templateUrl: './dialog/booki-mobile.html',
})
export class bookiMobile {}

@Component({
  selector: 'app-ohMyFood-accueil',
  templateUrl: './dialog/ohMyFood-accueil.html',
})
export class ohMyFoodAccueil {}

@Component({
  selector: 'app-ohMyFood-menu',
  templateUrl: './dialog/ohMyFood-menu.html',
})
export class ohMyFoodMenu {}

@Component({
  selector: 'app-laChouetteAgence-accueilOriginal',
  templateUrl: './dialog/laChouetteAgence-indexOriginal.html',
})
export class laChouetteAgenceAccueilOriginal {}

@Component({
  selector: 'app-laChouetteAgence-accueilModified',
  templateUrl: './dialog/laChouetteAgence-indexModified.html',
})
export class laChouetteAgenceAccueilModified {}

@Component({
  selector: 'app-laChouetteAgence-contactOriginal',
  templateUrl: './dialog/laChouetteAgence-contactOriginal.html',
})
export class laChouetteAgenceContactOriginal {}

@Component({
  selector: 'app-laChouetteAgence-contactModified',
  templateUrl: './dialog/laChouetteAgence-contactModified.html',
})
export class laChouetteAgenceContactModified {}

@Component({
  selector: 'app-kanap-listOfProducts',
  templateUrl: './dialog/kanap-listOfProducts.html',
})
export class kanapListOfProducts {}

@Component({
  selector: 'app-kanap-singlePage',
  templateUrl: './dialog/kanap-singlePage.html',
})
export class kanapSinglePage {}

@Component({
  selector: 'app-kanap-cart',
  templateUrl: './dialog/kanap-cart.html',
})
export class kanapCart {}

@Component({
  selector: 'app-kanap-orderConfirmation',
  templateUrl: './dialog/kanap-orderConfirmation.html',
})
export class kanapOrderConfirmation {}

@Component({
  selector: 'app-piiquante-register',
  templateUrl: './dialog/piiquante-register.html',
})
export class piiquanteRegister {}

@Component({
  selector: 'app-piiquante-listOfSauces',
  templateUrl: './dialog/piiquante-listOfSauces.html',
})
export class piiquanteListOfSauces {}

@Component({
  selector: 'app-piiquante-singlePage',
  templateUrl: './dialog/piiquante-singlePage.html',
})
export class piiquanteSinglePage {}

@Component({
  selector: 'app-piiquante-newSauce',
  templateUrl: './dialog/piiquante-newSauce.html',
})
export class piiquanteNewSauce {}

@Component({
  selector: 'app-groupomania-index',
  templateUrl: './dialog/groupomania-index.html',
})
export class groupomaniaIndex {}

@Component({
  selector: 'app-groupomania-singlePage',
  templateUrl: './dialog/groupomania-singlePage.html',
})
export class groupomaniaSinglePage {}

@Component({
  selector: 'app-groupomania-profile',
  templateUrl: './dialog/groupomania-profile.html',
})
export class groupomaniaProfile {}

@Component({
  selector: 'app-groupomania-listOfPosts',
  templateUrl: './dialog/groupomania-listOfPosts.html',
})
export class groupomaniaListOfPosts {}

@Component({
  selector: 'app-groupomania-admin',
  templateUrl: './dialog/groupomania-admin.html',
})
export class groupomaniaAdmin {}
