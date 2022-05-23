import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-oh-my-food',
  templateUrl: './oh-my-food.component.html',
  styleUrls: ['./oh-my-food.component.scss']
})
export class OhMyFoodComponent implements OnInit {
  @Output() 
  closeDetailedView: EventEmitter<any> = new EventEmitter<any>();

  accueil: boolean = false;
  menuALaFrançaise: boolean = false;
  menuLaNoteEnchantée: boolean = false;
  menuLaPaletteDuGout: boolean = false;
  menuLeDeliceDesSens: boolean = false;


  faGithub = faGithub;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(src: string) {
    if (src == 'accueil') {
      this.dialog.open(AccueilDialog);
    } else if (src == 'menuALaFrançaise') {
      this.dialog.open(MenuALaFrançaiseDialog);
    } else if (src == 'menuLaNoteEnchantée') {
      this.dialog.open(MenuLaNoteEnchantéeDialog);
    } else if (src == 'menuLaPaletteDuGout') {
      this.dialog.open(MenuLaPaletteDuGoutDialog);
    } else if (src == 'menuLeDeliceDesSens') {
      this.dialog.open(MenuLeDeliceDesSensDialog);
    }
  }

  closeMe() {
    this.closeDetailedView.emit('close');
  }
}

@Component({
  selector: 'app-accueil-dialog',
  templateUrl: './accueil-dialog.html',
  styleUrls: ['./oh-my-food.component.scss']
})
export class AccueilDialog {}

@Component({
  selector: 'app-menuALaFrançaise-dialog',
  templateUrl: './menuALaFrançaise-dialog.html',
  styleUrls: ['./oh-my-food.component.scss']
})
export class MenuALaFrançaiseDialog {}

@Component({
  selector: 'app-menuLaNoteEnchantée-dialog',
  templateUrl: './menuLaNoteEnchantée-dialog.html',
  styleUrls: ['./oh-my-food.component.scss']
})
export class MenuLaNoteEnchantéeDialog {}

@Component({
  selector: 'app-menuLaPaletteDuGout-dialog',
  templateUrl: './menuLaPaletteDuGout-dialog.html',
  styleUrls: ['./oh-my-food.component.scss']
})
export class MenuLaPaletteDuGoutDialog {}

@Component({
  selector: 'app-menuLeDeliceDesSens-dialog',
  templateUrl: './menuLeDeliceDesSens-dialog.html',
  styleUrls: ['./oh-my-food.component.scss']
})
export class MenuLeDeliceDesSensDialog {}
