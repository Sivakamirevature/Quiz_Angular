import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { QuizInfoComponent } from './quiz-info/quiz-info.component';
import { UpdatedQuizComponent } from './updated-quiz/updated-quiz.component';
const routes: Routes = [
  {path:'Show', component: ViewComponent},
  {path:'QuizInfo/:id', component: QuizInfoComponent},
  {path:'add', component: CreateQuizComponent},
  {path:'view', component: ViewComponent},
  {path:'edit/:id', component: UpdatedQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}