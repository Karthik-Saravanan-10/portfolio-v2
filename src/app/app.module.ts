import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRouterModule } from "./app-routing.module";
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    EducationComponent,
    SkillsComponent,
    FooterComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
