import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-kanap',
  templateUrl: './kanap.component.html',
  styleUrls: ['./kanap.component.scss']
})
export class KanapComponent implements OnInit {
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
      case 'listOfProducts':
        this.dialog.open(listOfProducts);
        break;
      case 'singlePage':
        this.dialog.open(singlePage);
        break;
      case 'cart':
        this.dialog.open(cart);
        break;
      case 'orderConfirmation':
        this.dialog.open(orderConfirmation);
        break;
    }
  }

  closeMe() {
    this.closeDetailedView.emit('close');
  }
}

@Component({
  selector: 'app-listOfProducts',
  templateUrl: './listOfProducts.html',
})
export class listOfProducts {}

@Component({
  selector: 'app-singlePage',
  templateUrl: './singlePage.html',
})
export class singlePage {}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
})
export class cart {}

@Component({
  selector: 'app-orderConfirmation',
  templateUrl: './orderConfirmation.html',
})
export class orderConfirmation {}