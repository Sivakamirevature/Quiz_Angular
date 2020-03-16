import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ViewComponent } from './view/view.component';

import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { QuizInfoComponent } from './quiz-info/quiz-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoolpipePipe } from './poolpipe.pipe';
import { QuizServiceService } from './quiz-service.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    CreateQuizComponent,
    QuizInfoComponent,
    PoolpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient,HttpClientModule,QuizServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}