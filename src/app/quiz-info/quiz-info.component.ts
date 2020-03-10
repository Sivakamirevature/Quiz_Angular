import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { TestserviceService } from '../testservice.service';

import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash'; 


@Component({
  selector: 'app-quiz-info',
  templateUrl: './quiz-info.component.html',
  styleUrls: ['./quiz-info.component.css']
})


export class QuizInfoComponent implements OnInit{

  object: any;
  id: number;

  constructor(private serviceClass: TestserviceService,  private route: ActivatedRoute, private router: Router ) { }

//   transform(value: any): any{
//     if(value!== undefined && value!== null){
//         return _.uniqBy(value, 'poolName');
//     }
//     return value;
// }

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

}

