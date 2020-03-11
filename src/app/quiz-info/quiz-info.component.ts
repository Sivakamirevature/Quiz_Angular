import { Component, OnInit} from '@angular/core';
import { TestserviceService } from '../testservice.service';

import { ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-quiz-info',
  templateUrl: './quiz-info.component.html',
  styleUrls: ['./quiz-info.component.css']
})



export class QuizInfoComponent implements OnInit{

  object: any;
  id: number;
  poolquestionobj: any;

  constructor(private serviceClass: TestserviceService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.id = Number(this.route.snapshot.paramMap.get('id'));
   console.log("Quiz id is: "+this.id)
   this.SingleQuizInfo(this.id);

  }
  SingleQuizInfo(id:number){
    this.serviceClass.SingleQuizInfo(this.id).subscribe((res :any)=>{
      this.object=res;
      console.log(this.object)
      console.log(this.object[0].quiz_name)
    },
    error => {
      return console.log(error);
    });
  }

  viewPoolLQuestions(quiz_id:number, poolName:string){
    this.serviceClass.poolQuestions(quiz_id, poolName).subscribe((response:any)=>{
      this.poolquestionobj = response;
      console.log(this.poolquestionobj)
    },
    error=>{
      return console.log(error)
    });
  }

}

