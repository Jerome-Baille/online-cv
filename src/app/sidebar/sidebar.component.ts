import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faMapLocationDot = faMapLocationDot;
  faLocationDot = faLocationDot;
  faEnveloppe = faEnvelope;
  faPhone = faPhone;
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
