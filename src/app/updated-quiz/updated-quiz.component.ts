import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Level, Category } from '../quiz';
import { Pool } from '../create-quiz/quiz';
import { QuizServiceService } from '../quiz-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updated-quiz',
  templateUrl: './updated-quiz.component.html',
  styleUrls: ['./updated-quiz.component.css']
})
export class UpdatedQuizComponent implements OnInit {
  categories: Array<Category> = [];
  levels: Array<Level> = [];
  pools: Array<Pool> = [];
  object: Array<any> = [];
  id: number;
  quizquestion:any;
  questions: any;
  quizForm: FormGroup
  check: any;
  
  constructor(private serviceClass:QuizServiceService, private formbuilder: FormBuilder,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.SingleQuizInfo(this.id)
    this.getCategoryList();
    this.getLevelList();
    this.getPoolList();  
    this.check = 1;
    
   // this.quizForm.patchValue(this.object)
  }
  SingleQuizInfo(id:number){
    this.serviceClass.SingleQuizInfo(this.id).subscribe((res :any)=>{
      this.object=res;
      console.log(this.object)
      console.log(this.object[0].quiz_id)
     
    console.log("expecting "+ this.object[0].quiz_id)
    this.check = this.object[0].level_override
    this.quizForm.patchValue({
    quiz_name: this.object[0].quiz_id,
    tags: this.object[0].tags,
    activity_points: this.object[0].activity_points,
    duration: this.object[0].duration,
    max_no_of_Attempts: this.object[0].max_no_of_Attempts,
    level_override: this.object[0].level_override,
    slug: this.object[0].slug,
    description: this.object[0].description,
    meta_keywords: this.object[0].meta_keywords,
    meta_description: this.object[0].meta_description,
    icon: this.object[0].icon,
    instructions: this.object[0].instructions,
    // category: { categoryId: this.object[0].category.categoryId},
    // level: { levelId: this.object[0].level.levelId},
    pass_percentage: this.object[0].pass_percentage,
    is_available_pre_signup: this.object[0].is_available_pre_signup,
    is_available_via_slug: this.object[0].is_available_via_slug,
    is_available_dashboard: this.object[0].is_available_dashboard,
    is_timer_enabled: this.object[0].is_timer_enabled,
    is_shuffle_questions: this.object[0].is_shuffle_questions,
    is_shuffle_answers: this.object[0].is_shuffle_answers,
    is_display_score: this.object[0].is_display_score,
    is_allow_attempt_review: this.object[0].is_allow_attempt_review,
    is_show_whether_correct: this.object[0].is_show_whether_correct,
    is_show_correct_answers_passed: this.object[0].is_show_correct_answers_passed,
    is_show_correct_answers_failed: this.object[0].is_show_correct_answers_failed,
    is_show_answer_explanations: this.object[0].is_show_answer_explanations,
    is_enable_save_resume: this.object[0].is_enable_save_resume
      
    });
    },
    error => {
      return console.log(error);
    });
  
  this.quizForm = this.formbuilder.group({
    quiz_name: ['',[Validators.required]],
    tags: [''],
    activity_points: [''],
    duration: [''],
    max_no_of_Attempts: [''],
    level_override: [''],
    slug: [''],
    description:[''],
    meta_keywords:[''],
    meta_description:[''],
    icon:[''],
    instructions:[''],
    category: this.formbuilder.group({
       categoryId: ['']
    }),
    level: this.formbuilder.group({
      levelId: ['']
    }),
    pass_percentage:[''],
    is_available_pre_signup:[''],
    is_available_via_slug:[''],
    is_available_dashboard:[''],
    is_timer_enabled:[''],
    is_shuffle_questions:[''],
    is_shuffle_answers:[''],
    is_display_score:[''],
    is_allow_attempt_review:[''],
    is_show_whether_correct:[''],
    is_show_correct_answers_passed:[''],
    is_show_correct_answers_failed:[''],
    is_show_answer_explanations:[''],
    is_enable_save_resume:[''],
    pool: this.formbuilder.group({
      id: ['']
    }),
    quizQuestionObj: this.formbuilder.array([])
     });
  //formLoad(){
    // console.log("expecting "+ this.object[0].quiz_id)
    // this.quizForm.patchValue({
    //   quiz_name: this.object[0].quiz_id,
    //   tags: this.object[0].tags,
    // activity_points: this.object[0].activity_points,
    // duration: this.object[0].duration,
    // max_no_of_Attempts: this.object[0].max_no_of_Attempts,
    // level_override: this.object[0].level_override,
    // slug: this.object[0].slug,
    // description: this.object[0].description,
    // meta_keywords: this.object[0].meta_keywords,
    // meta_description: this.object[0].meta_description,
    // icon: this.object[0].icon,
    // instructions: this.object[0].instructions,
    // // category: { categoryId: this.object[0].category.categoryId},
    // // level: { levelId: this.object[0].level.levelId},
    // pass_percentage: this.object[0].pass_percentage,
    // is_available_pre_signup: this.object[0].is_available_pre_signup,
    // is_available_via_slug: this.object[0].is_available_via_slug,
    // is_available_dashboard: this.object[0].is_available_dashboard,
    // is_timer_enabled: this.object[0].is_timer_enabled,
    // is_shuffle_questions: this.object[0].is_shuffle_questions,
    // is_shuffle_answers: this.object[0].is_shuffle_answers,
    // is_display_score: this.object[0].is_display_score,
    // is_allow_attempt_review: this.object[0].is_allow_attempt_review,
    // is_show_whether_correct: this.object[0].is_show_whether_correct,
    // is_show_correct_answers_passed: this.object[0].is_show_correct_answers_passed,
    // is_show_correct_answers_failed: this.object[0].is_show_correct_answers_failed,
    // is_show_answer_explanations: this.object[0].is_show_answer_explanations,
    // is_enable_save_resume: this.object[0].is_enable_save_resume
      
    // });
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
getPoolList(){
  this.serviceClass.getPools().subscribe((response: any)=>{
    this.pools = response;
  })
}

setCategoryId(id: number){
  this.quizForm.patchValue({ category: {categoryId : id} });
}

setLevelId(id: number){
  this.quizForm.patchValue({ level: {  levelId : id } });
}

setPoolId(id: number){
  this.quizForm.patchValue({pool:{id: id}})
}

save(){

}
addQuestions(){

}

getCheckBoxValue(event){

}
getQuestions(){

}
}  