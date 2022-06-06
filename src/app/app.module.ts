import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HttpClientModule } from "@angular/common/http";
import { SubscriptionComponent } from './subscription/subscription.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule} from "@angular/router";
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemListComponent,
    SubscriptionComponent,
    LoginPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      {path: 'login', component: LoginPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
