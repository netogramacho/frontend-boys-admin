import { LOCALE_ID, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPortService } from './services/view-port.service';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { LoadingInterceptor } from './interceptor/Loading.interceptor';
import { UserApi } from './api/user-api';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import localePt from '@angular/common/locales/pt'

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CdkStepperModule,
    MatInputModule,
    HttpClientModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ComponentsModule
  ],
  exports: [CdkStepperModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    ViewPortService,
    UserApi,
    provideNgxMask(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
