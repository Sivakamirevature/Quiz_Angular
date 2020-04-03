import { Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { QuizServiceService } from '../quiz-service.service';

@Component({
  selector: 'app-quiz-info',
  templateUrl: './quiz-info.component.html',
  styleUrls: ['./quiz-info.component.css']
})

export class QuizInfoComponent implements OnInit{

  object: any;
  id: number;
  poolquestionobj: any;

  constructor(private serviceClass:QuizServiceService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.id = Number(this.route.snapshot.paramMap.get('id'));
   console.log("Quiz id is: "+this.id)
   this.SingleQuizInfo(this.id);
  }
  SingleQuizInfo(id:number){
    this.serviceClass.SingleQuizInfo(this.id).subscribe((res :any)=>{
      this.object=res.data;
    },
    error => {
      return console.log(error);
    });
  }

  viewPoolQuestions(quiz_id:number, poolName:string){
    this.serviceClass.poolQuestions(quiz_id, poolName).subscribe((response:any)=>{
      //this.poolquestionobj = [];
      this.poolquestionobj = response.data;
    },
    error=>{
      return console.log(error)
    });
  }
}