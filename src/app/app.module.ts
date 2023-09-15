import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ExperienceComponent } from './experience/experience.component';
import { HttpClientModule } from '@angular/common/http';
import { CertificadosComponent } from './certificados/certificados.component';
import { InteresesComponent } from './intereses/intereses.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    HeaderComponent,
    ExperienceComponent,
    CertificadosComponent,
    InteresesComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
