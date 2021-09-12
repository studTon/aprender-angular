import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { from } from 'rxjs';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [//{provide: LOCALE_ID, useValue: 'pt' }
  SettingsService,
  {
    provide: LOCALE_ID,
    deps: [SettingsService],
    useFactory: (settingsService: any) => settingsService.getLocale
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
