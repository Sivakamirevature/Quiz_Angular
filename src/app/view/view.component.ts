import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { QuizServiceService } from '../quiz-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  object: Array <any>=[];
  constructor(private serviceClass: QuizServiceService, private router: Router) { }
  ngOnInit(): void {
    this.view();
  }

  view() {
    this.serviceClass.view().subscribe((response :any)=>{
      this.object=response;
      console.log(this.object)
    },
    error => {
      return console.log(error);
    });
  }

  deleteQuiz(id: number) {
   if(confirm("Are you sure, do you delete the Quiz?")){
   this.serviceClass.deleteQuiz(id)
        .subscribe(
         response => {
            console.log(response);
           this.view();
          },
   
         error => {
           return console.log(error);
         });
        }
  }
    
  activeDeactive(quiz_id:number){
    if(confirm("Are you Sure, Do you want to change the Activation Mode?")){
    this.serviceClass.activeDeactive(quiz_id).subscribe(response => {console.log(response);
      this.view();
    console.log(this.view());
  },
    error => {
      return console.log(error);
    });
  }
}

  createPage(){
    this.router.navigate(['/add']);  // define your component where you want to go
}
}