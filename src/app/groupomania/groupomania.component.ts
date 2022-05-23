import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-groupomania',
  templateUrl: './groupomania.component.html',
  styleUrls: ['./groupomania.component.scss']
})
export class GroupomaniaComponent implements OnInit {
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
      case 'groupomaniaIndex':
        this.dialog.open(groupomaniaIndex);
        break;
      case 'groupomaniaListOfProducts':
        this.dialog.open(groupomaniaListOfProducts);
        break;
      case 'groupomaniaSinglePage':
        this.dialog.open(groupomaniaSinglePage);
        break;
      case 'groupomaniaProfile':
        this.dialog.open(groupomaniaProfile);
        break;
      case 'groupomaniaAdmin':
        this.dialog.open(groupomaniaAdmin);
        break;
    }
  }

  closeMe() {
    this.closeDetailedView.emit('close');
  }
}

@Component({
  selector: 'app-groupomaniaIndex',
  templateUrl: './groupomaniaIndex.html',
})
export class groupomaniaIndex {}

@Component({
  selector: 'app-groupomaniaListOfProducts',
  templateUrl: './groupomaniaListOfProducts.html',
})
export class groupomaniaListOfProducts {}

@Component({
  selector: 'app-groupomaniaSinglePage',
  templateUrl: './groupomaniaSinglePage.html',
})
export class groupomaniaSinglePage {}

@Component({
  selector: 'app-groupomaniaProfile',
  templateUrl: './groupomaniaProfile.html',
})
export class groupomaniaProfile {}

@Component({
  selector: 'app-groupomaniaAdmin',
  templateUrl: './groupomaniaAdmin.html',
})
export class groupomaniaAdmin {}