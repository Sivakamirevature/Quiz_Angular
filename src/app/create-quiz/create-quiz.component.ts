import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  categories: Array<any> = [];
  levels: Array<any> = [];
  quizForm: FormGroup;
  isshow : boolean = true;

  constructor(private serviceClass:QuizServiceService) { }

  ngOnInit(): void {
    this.getCategoryList();
    this.getLevelList()
  }

  getCategoryList(){
    this.serviceClass.getCategories().subscribe((response : any)=>{
      this.categories = response;
    });
  }

  getLevelList(){
    this.serviceClass.getLevels().subscribe((response : any)=>{
      this.levels = response;
    });
  }

  setCategoryId(id: number){
    this.quizForm.patchValue({ category: {categoryId : id} });
  }

  setLevelId(id: number){
    this.quizForm.patchValue({ level: {  levelId : id } });
  }

  addQuestions(){
    this.isshow = false;
  }
}