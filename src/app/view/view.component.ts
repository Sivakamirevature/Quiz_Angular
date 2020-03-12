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
      console.log("CATEGORY:2 "+ response) 
      //console.log(this.object[0].quiz_name)
    },
    error => {
      return console.log(error);
    });
  }

  deleteQuiz(id: number) {
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
    
  activeDeactive(quiz_id:number){
    this.serviceClass.activeDeactive(quiz_id).subscribe(response => {console.log(response);
      this.view();
      alert("Activation Mode Changed");
    console.log(this.view());
  },
    error => {
      return console.log(error);
    });
  }

  createPage(){
    this.router.navigate(['/add']);  // define your component where you want to go
}
}