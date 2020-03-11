import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(private http:HttpClient) { }
  view(){
    
    return this.http.get("http://localhost:8080/Quizzes/getAllQuizzes");
  }
  deleteQuiz(id: number){
    return this.http.delete("http://localhost:8080/Quizzes/doDeleteByID/"+id);
  }

  SingleQuizInfo(quiz_id:number){
    return this.http.get("http://localhost:8080/Quizzes/getQuizByID/"+quiz_id);
  }

  activeDeactive(id: number)
  {
    return this.http.put("http://localhost:8080/Quizzes/doActiveDeactiveQuiz/"+id,id);
  }

  poolQuestions(id: number, poolname: string){
    return this.http.get("http://localhost:8080/Quizzes/getpoolquestions/"+id+"/"+poolname);
  }
}