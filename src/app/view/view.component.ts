import { Component, OnInit } from '@angular/core';
import {TestserviceService} from '../testservice.service';
import {QuizInfoComponent} from '../quiz-info/quiz-info.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  object: Array <any>=[];

  constructor(private serviceClass:TestserviceService) { }

  ngOnInit(): void {
    this.view();
  }

  view() {
    this.serviceClass.view().subscribe((res :any)=>{
      this.object=res;
      console.log(this.object)
      //console.log(this.object[0].quiz_name)
    });
  }

  deleteQuiz(id: number) {
   this.serviceClass.deleteQuiz(id)
        .subscribe(
         data => {
            console.log(data);
            
           this.view();
          },
         error => {
            return console.log(error);
          });
    
  }
  
  
  activeDeactive(quiz_id:number){
    this.serviceClass.activeDeactive(quiz_id).subscribe(data => {console.log(data);
      this.view();
      alert("Activation Mode Changed");
    console.log(this.view());
  },
    error => {
      return console.log(error);
    });
  }
}