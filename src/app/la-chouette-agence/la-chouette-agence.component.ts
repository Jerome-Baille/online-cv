import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-la-chouette-agence',
  templateUrl: './la-chouette-agence.component.html',
  styleUrls: ['./la-chouette-agence.component.scss']
})
export class LaChouetteAgenceComponent implements OnInit {
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
      case 'indexOriginal':
        this.dialog.open(indexOriginal);
        break;
      case 'indexModified':
        this.dialog.open(indexModified);
        break;
      case 'contactOriginal':
        this.dialog.open(contactOriginal);
        break;
      case 'contactModified':
        this.dialog.open(contactModified);
        break;
    }
  }

  closeMe() {
    this.closeDetailedView.emit('close');
  }
}

@Component({
  selector: 'app-indexOriginal',
  templateUrl: './indexOriginal.html',
  styleUrls: ['./la-chouette-agence.component.scss']
})
export class indexOriginal {}

@Component({
  selector: 'app-indexModified',
  templateUrl: './indexModified.html',
  styleUrls: ['./la-chouette-agence.component.scss']
})
export class indexModified {}

@Component({
  selector: 'app-contactOriginal',
  templateUrl: './contactOriginal.html',
  styleUrls: ['./la-chouette-agence.component.scss']
})
export class contactOriginal {}

@Component({
  selector: 'app-contactModified',
  templateUrl: './contactModified.html',
  styleUrls: ['./la-chouette-agence.component.scss']
})
export class contactModified {}