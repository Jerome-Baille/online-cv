import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandpageComponent } from './landpage/landpage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectsComponent, 
  bookiDesktop, bookiMobile, 
  ohMyFoodAccueil, ohMyFoodMenu,
  laChouetteAgenceAccueilOriginal, laChouetteAgenceAccueilModified, laChouetteAgenceContactOriginal, laChouetteAgenceContactModified,
  kanapListOfProducts, kanapSinglePage, kanapCart, kanapOrderConfirmation,
  piiquanteRegister, piiquanteListOfSauces, piiquanteSinglePage, piiquanteNewSauce,
  groupomaniaIndex, groupomaniaSinglePage, groupomaniaProfile, groupomaniaListOfPosts, groupomaniaAdmin
} from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LandpageComponent,
    SidebarComponent,
    ProjectsComponent,
    bookiMobile,
    bookiDesktop,
    ohMyFoodAccueil, 
    ohMyFoodMenu,
    laChouetteAgenceAccueilOriginal, 
    laChouetteAgenceAccueilModified, 
    laChouetteAgenceContactOriginal, 
    laChouetteAgenceContactModified,
    kanapListOfProducts, 
    kanapSinglePage, 
    kanapCart, 
    kanapOrderConfirmation,
    piiquanteRegister, 
    piiquanteListOfSauces, 
    piiquanteSinglePage, 
    piiquanteNewSauce,
    groupomaniaIndex, 
    groupomaniaSinglePage, 
    groupomaniaProfile, 
    groupomaniaListOfPosts, 
    groupomaniaAdmin, EducationComponent, ExperienceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatProgressBarModule,
    MatExpansionModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
