import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My online CV';

  constructor(
    public translate: TranslateService
  ){
    // Register translation languages
    translate.addLangs(['en', 'fr']);
    // Set default language
    translate.setDefaultLang('en');
  } 

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }
}
