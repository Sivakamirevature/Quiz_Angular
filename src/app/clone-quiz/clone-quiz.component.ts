import { Component, OnInit } from '@angular/core';
import { Category, Level } from '../quiz';
import { Pool } from '../create-quiz/quiz';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { QuizServiceService } from '../quiz-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clone-quiz',
  templateUrl: './clone-quiz.component.html',
  styleUrls: ['./clone-quiz.component.css']
})
export class CloneQuizComponent implements OnInit {
  categories: Array<Category> = [];
  levels: Array<Level> = [];
  pools: Array<Pool> = [];
  object: Array<any> = [];
  id: number;
  quizquestion:any;
  questions: Array<any> = [];
  quizForm: FormGroup
  quizQuestionObj1: FormArray;
  obj1: any;
  check: any;
  q:Array<any>=[];
  count: number = 0;
  questionIds:any = []
  poolquestionobj: any;
  requestBody: any;
  selectedQuiestionIds: any = [];
  isDisabled = false
  isChecked = true;
  disabled3: boolean;
  disabled1: boolean;
  tagValue:String;
  
  constructor(private serviceClass:QuizServiceService, private formbuilder: FormBuilder,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.SingleQuizInfo(this.id)
    this.getCategoryList();
    this.getLevelList();
    this.getPoolList();  
    this.check = 1;
  }
  SingleQuizInfo(id:number){
    this.serviceClass.SingleQuizInfo(this.id).subscribe((res :any)=>{
      this.object=res.data;
      console.log("Object Value is : "+ JSON.stringify(this.object[0]));
    
    this.quizForm.patchValue({
    quiz_name: this.object[0].quiz_id,
    tags: this.object[0].tags.split(','),
    activity_points: this.object[0].activity_points,
    duration: this.object[0].duration,
    max_no_of_Attempts: this.object[0].max_no_of_attempts,
    level_override: this.object[0].level_override,
    slug: this.object[0].slug,
    description: this.object[0].description,
    meta_keywords: this.object[0].meta_keywords,
    meta_description: this.object[0].meta_description,
    instructions: this.object[0].instructions,
     category: { categoryId: this.object[0].category.categoryId},
     level: { levelId: this.object[0].level.levelId},
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
    this.object[0].quizQuestionObj.forEach(element => {
      this.selectedQuiestionIds.push(element.question_id);
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
  }
     
getCategoryList(){
  this.serviceClass.getCategories().subscribe((response : any)=>{
    this.categories = response.data;
  });
}

getLevelList(){
  this.serviceClass.getLevels().subscribe((response : any)=>{
    this.levels = response.data;
  });
}
getPoolList(){
  this.serviceClass.getPools().subscribe((response: any)=>{
    this.pools = response.data;
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

addQuestions(){
  for(let i=0;i<this.quizQuestionObj1.length;i++)
  {
    let obj2 = {question_id:  Number(this.quizQuestionObj1.value[i]), pool: this.quizForm.get("pool").value}
    console.log("obj2: "+JSON.stringify(obj2))
    this.q.push(obj2);              
  }
  for(let i = 0; i<this.quizQuestionObj1.length;i++){
    console.log("Ids: ", this.quizQuestionObj1.value)
    this.questionIds.forEach((element,index) => {
      if(element==this.quizQuestionObj1.value[i]){
      this.questionIds.splice(index,1);
      }});
  }
  for(let i = 0; i<=this.quizQuestionObj1.length;i++){
    console.log("Length: "+ this.quizQuestionObj1.length)
    this.quizQuestionObj1.removeAt(0);
  }
  console.log("Q value: "+JSON.stringify(this.q))
  this.quizquestion = this.q;
  console.log("Quiz value value: "+ JSON.stringify(this.quizquestion))
  this.getQuestions();    
  }

getCheckBoxValue(event){
  this.quizQuestionObj1 = this.quizForm.get('quizQuestionObj') as FormArray;
  if(event.target.checked){
    this.quizQuestionObj1 .push(new FormControl(event.target.value));
  }
  else{
    let i:number =0;
    this.quizQuestionObj1.controls.forEach((item: FormControl)=> {
      if(item.value == event.target.value){
        this.quizQuestionObj1.removeAt(i)
        return;
      }
      i++;
    })
  }
}

getQuestions(){
  this.serviceClass.getAllQuestions().subscribe((response : any)=>{  
    this.questions = response.data; 
    if(this.count === 0){
    for(let i=0;i<this.questions.length;i++){
      this.questionIds.push(this.questions[i].id)
      this.count = this.count +1;
    }
  }
  console.log("Question IDs: "+this.questionIds)
});
}
viewPoolQuestions(quiz_id:number, poolName:string){
  this.serviceClass.poolQuestions(quiz_id, poolName).subscribe((response:any)=>{
    this.poolquestionobj = response.data;
    console.log("Pool Questions",this.poolquestionobj)
  },
  error=>{
    return console.log(error)
  });
}
deleteQuestion(id){
  if(confirm("Are you sure, Do you delete Question?")){
  this.serviceClass.deleteQuestion(id).subscribe(response =>{
  });
  this.object.forEach(element=>{
    element.quizQuestionObj.forEach((ele,index) => {
      if(ele.id===id){
        this.selectedQuiestionIds.splice(index,1)
        this.object[0].quizQuestionObj=this.object[0].quizQuestionObj.filter(ele => ele.id !== id)
      }
    });
  })
 }
}
 save(){
  console.log("Quiz id: "+ this.object)
  this.requestBody = {
  quiz_id :this.object[0].quiz_id,
  quiz_name: this.quizForm.get("quiz_name").value,
    tags: this.quizForm.get("tags").value.toString(),
    activity_points: Number(this.quizForm.get("activity_points").value),
    duration: this.quizForm.get("duration").value,
    max_no_of_Attempts: Number(this.quizForm.get("max_no_of_Attempts").value),
    level_override: Number(this.quizForm.get("level_override").value),
    slug: this.quizForm.get("slug").value,
    description: this.quizForm.get("description").value,
    meta_keywords:this.quizForm.get("meta_keywords").value,
    meta_description: this.quizForm.get("meta_description").value,
    icon: this.quizForm.get("icon").value,
    instructions:this.quizForm.get("instructions").value,
    category: this.quizForm.get("category").value,
    level: this.quizForm.get("level").value,
    pass_percentage:Number(this.quizForm.get("pass_percentage").value),
    is_available_pre_signup: Number(this.quizForm.get("is_available_pre_signup").value),
    is_available_via_slug: Number(this.quizForm.get("is_available_via_slug").value),
    is_available_dashboard: Number(this.quizForm.get("is_available_dashboard").value),
    is_timer_enabled: Number(this.quizForm.get("is_timer_enabled").value),
    is_shuffle_questions: Number(this.quizForm.get("is_shuffle_questions").value),
    is_shuffle_answers: Number(this.quizForm.get("is_shuffle_answers").value),
    is_display_score: Number(this.quizForm.get("is_display_score").value),
    is_allow_attempt_review: Number(this.quizForm.get("is_allow_attempt_review").value),
    is_show_whether_correct: Number(this.quizForm.get("is_show_whether_correct").value),
    is_show_correct_answers_passed: Number(this.quizForm.get("is_show_correct_answers_passed").value),
    is_show_correct_answers_failed: Number(this.quizForm.get("is_show_correct_answers_failed").value),
    is_show_answer_explanations: Number(this.quizForm.get("is_show_answer_explanations").value),
    is_enable_save_resume: Number(this.quizForm.get("is_enable_save_resume").value),
    quizQuestionObj: this.quizquestion   
} 
console.log("Request Body: "+ JSON.stringify(this.requestBody))
this.serviceClass.createQuiz(this.requestBody).subscribe(response => {
alert("Inserted Successfully")
})
}
signup(event){
  this.isDisabled = true
  this.isChecked = true
  if(event.target.checked){
      this.disabled1 = false;
  }
}
signup1(event){
  this.isDisabled = true
  this.isChecked = true
  if(event.target.checked){
      this.disabled1 = false;
  }  
}
}