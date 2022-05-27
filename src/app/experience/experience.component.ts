import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() lang!: string;

  experienceArray: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.lang === 'fr') {
      fetch('./assets/i18n/fr.json').then(res => res.json())
      .then(jsonData => {
        this.experienceArray = jsonData.experience;
      });
    } else {
      fetch('./assets/i18n/en.json').then(res => res.json())
      .then(jsonData => {
        this.experienceArray = jsonData.experience;
      });
    }
  }
}
