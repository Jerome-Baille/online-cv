import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() lang!: string;

  educationArray: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.lang === 'fr') {
      fetch('./assets/i18n/fr.json').then(res => res.json())
      .then(jsonData => {
        this.educationArray = jsonData.education;
      });
    } else {
      fetch('./assets/i18n/en.json').then(res => res.json())
      .then(jsonData => {
        this.educationArray = jsonData.education;
      });
    }
  }  

}
