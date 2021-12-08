import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaIniComponent } from './pantalla-ini/pantalla-ini.component';
import { PantallaPedidoComponent } from './pantalla-pedido/pantalla-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    PantallaIniComponent,
    PantallaPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
