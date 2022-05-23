import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandpageComponent } from './landpage/landpage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BookiComponent, bookiDesktop, bookieMobile } from './booki/booki.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { OhMyFoodComponent, AccueilDialog, MenuALaFrançaiseDialog, MenuLaNoteEnchantéeDialog, MenuLaPaletteDuGoutDialog, MenuLeDeliceDesSensDialog  } from './oh-my-food/oh-my-food.component';
import { LaChouetteAgenceComponent, indexOriginal, indexModified, contactOriginal, contactModified } from './la-chouette-agence/la-chouette-agence.component';
import { KanapComponent, listOfProducts, singlePage, cart, orderConfirmation } from './kanap/kanap.component';
import { PiiquanteComponent, piiquanteRegister, piiquanteListOfProducts, piiquanteSinglePage, piiquanteNewSauce } from './piiquante/piiquante.component';
import { GroupomaniaComponent, groupomaniaIndex, groupomaniaListOfProducts, groupomaniaSinglePage, groupomaniaProfile, groupomaniaAdmin } from './groupomania/groupomania.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandpageComponent,
    BookiComponent,
    bookiDesktop,
    bookieMobile,
    OhMyFoodComponent,
    AccueilDialog,
    MenuALaFrançaiseDialog,
    MenuLaNoteEnchantéeDialog,
    MenuLaPaletteDuGoutDialog,
    MenuLeDeliceDesSensDialog,
    LaChouetteAgenceComponent,
    indexOriginal,
    indexModified,
    contactOriginal,
    contactModified,
    KanapComponent,
    listOfProducts,
    singlePage,
    cart,
    orderConfirmation,
    PiiquanteComponent,
    piiquanteRegister,
    piiquanteListOfProducts,
    piiquanteSinglePage,
    piiquanteNewSauce,
    GroupomaniaComponent,
    groupomaniaIndex,
    groupomaniaListOfProducts,
    groupomaniaSinglePage,
    groupomaniaProfile,
    groupomaniaAdmin,
    SidebarComponent

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
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
