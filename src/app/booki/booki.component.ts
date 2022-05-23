import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-booki',
  templateUrl: './booki.component.html',
  styleUrls: ['./booki.component.scss']
})
export class BookiComponent implements OnInit {
  @Output() 
  closeDetailedView: EventEmitter<any> = new EventEmitter<any>();

  faCircleXmark = faCircleXmark;
  faGithub = faGithub;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(src: string) {
    if (src == 'desktop') {
      this.dialog.open(bookiDesktop);
    } else if (src == 'mobile') {
      this.dialog.open(bookieMobile);
    }
  }

  closeMe() {
    this.closeDetailedView.emit('close');
  }
}

@Component({
  selector: 'app-bookiDesktop',
  templateUrl: './bookiDesktop.html',
})
export class bookiDesktop {}

@Component({
  selector: 'app-bookieMobile',
  templateUrl: './bookieMobile.html',
})
export class bookieMobile {}