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
  laChouetteAgenceAccueilOriginal, laChouetteAgenceAccueilModified, laChouetteAgenceContactOriginal, laChouetteAgenceContactModified,
  kanapListOfProducts, kanapSinglePage, kanapCart, kanapOrderConfirmation,
  piiquanteRegister, piiquanteListOfSauces, piiquanteSinglePage, piiquanteNewSauce,
  groupomaniaIndex, groupomaniaSinglePage, groupomaniaProfile, groupomaniaListOfPosts, groupomaniaAdmin
} from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    LandpageComponent,
    SidebarComponent,
    ProjectsComponent,
    bookiMobile,
    bookiDesktop,
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
    groupomaniaAdmin

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
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
