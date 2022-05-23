import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-piiquante',
  templateUrl: './piiquante.component.html',
  styleUrls: ['./piiquante.component.scss']
})
export class PiiquanteComponent implements OnInit {
  @Output() 
  closeDetailedView: EventEmitter<any> = new EventEmitter<any>();

  faGithub = faGithub;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(src: string) {
    switch (src) {
      case 'piiquanteRegister':
        this.dialog.open(piiquanteRegister);
        break;
      case 'piiquanteListOfProducts':
        this.dialog.open(piiquanteListOfProducts);
        break;
      case 'piiquanteSinglePage':
        this.dialog.open(piiquanteSinglePage);
        break;
      case 'piiquanteNewSauce':
        this.dialog.open(piiquanteNewSauce);
        break;
    }
  }

  closeMe() {
    this.closeDetailedView.emit('close');
  }
}

@Component({
  selector: 'app-piiquanteRegister',
  templateUrl: './piiquanteRegister.html',
})
export class piiquanteRegister {}

@Component({
  selector: 'app-piiquanteListOfProducts',
  templateUrl: './piiquanteListOfProducts.html',
})
export class piiquanteListOfProducts {}

@Component({
  selector: 'app-piiquanteSinglePage',
  templateUrl: './piiquanteSinglePage.html',
})
export class piiquanteSinglePage {}

@Component({
  selector: 'app-piiquanteNewSauce',
  templateUrl: './piiquanteNewSauce.html',
})
export class piiquanteNewSauce {}