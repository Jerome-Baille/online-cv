import { Component, Input, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() lang!: string;

  softArray: any = [];
  langArray: any = [];

  faMapLocationDot = faMapLocationDot;
  faLocationDot = faLocationDot;
  faEnveloppe = faEnvelope;
  faPhone = faPhone;
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.lang === 'fr') {
      fetch('./assets/i18n/fr.json').then(res => res.json())
      .then(jsonData => {
        this.softArray = jsonData.soft;
        this.langArray = jsonData.lang;
      });
    } else {
      fetch('./assets/i18n/en.json').then(res => res.json())
      .then(jsonData => {
        this.softArray = jsonData.soft;
        this.langArray = jsonData.lang;
      });
    }
  }

}
