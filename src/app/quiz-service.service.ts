import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(private http:HttpClient) { }
  url:string = "http://localhost:8080/Quizzes/";

    view(){
          return this.http.get(this.url+"getAllQuizzes");
    }
    deleteQuiz(id: number){
      return this.http.delete(this.url+"doDeleteByID/"+id);
    }
    SingleQuizInfo(quiz_id:number){
      return this.http.get(this.url+"getQuizByID/"+quiz_id);
    }
    activeDeactive(id: number)
   {
    return this.http.put(this.url+"doActiveDeactiveQuiz/"+id,id);
    }
    
  poolQuestions(id: number, poolname: string){
    return this.http.get(this.url+"getpoolquestions/"+id+"/"+poolname);
  }

  getCategories(){
    return this.http.get(this.url+"getCategories");
  }
  getLevels(){
    return this.http.get(this.url+"getLevels");
  }

  getAllQuestions(){
    return this.http.get("http://localhost:8080/questions/showAllQuestions");
  }

  createQuiz(quiz:Quiz){
    return this.http.post(this.url+"doCreateQuiz", quiz);

  }
}