import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Category, Level, Quiz, Pool, Question  } from './quiz';





@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  categories: Array<Category> = [];
  levels: Array<Level> = [];
  pools: Array<Pool> = [];
  quizForm: FormGroup;
  questions: Array<any> = [];
  quizQuestionObj1: FormArray;
  question:Question;
  q:Array<any>=[];
  quizquestion:any;
  requestBody: any;
  

  constructor(private serviceClass:QuizServiceService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form();
    this.getCategoryList();
    this.getLevelList();
    this.getPoolList();   
  }

  form() {
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
          this.questions = response;
        }
        );
      }

      addQuestions(){   
        for(let i=0;i<this.quizQuestionObj1.length;i++)
        {
          console.log("Iterated Value: "+this.quizQuestionObj1.value[i])
                              // var qq = new Quiz(this.quizForm.quiz_name, tags1, activity_points1, duration1, max_no_of_Attempts1, level_override1, slug1, description1, meta_keywords1, meta_description1, icon1, instructions1, category1, level1, pass_percentage1, is_available_pre_signup1, is_available_via_slug1, is_available_dashboard1, is_timer_enabled1, is_shuffle_questions1, is_shuffle_answers1, is_display_score1, is_allow_attempt_review1, is_show_whether_correct1, is_show_correct_answers_passed1, is_show_correct_answers_failed1, is_show_answer_explanations1, is_enable_save_resume1, quizQuesObj1)
                              let obj1 = {
                                id: Number(this.quizQuestionObj1.value[i]),
                              }
                                let obj2 = {question: obj1, pool: this.quizForm.get("pool").value}
                                this.q.push(obj2);
                            }
                           this.quizquestion = this.q;                        
              }
      save(){
        this.requestBody = {
          quiz_name: this.quizForm.get("quiz_name").value,
          tags: this.quizForm.get("tags").value,
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
     console.log("Request Body: "+ this.requestBody.value)
     this.serviceClass.createQuiz(this.requestBody).subscribe(response => {
      alert("Inserted Successfully")
    })
  }
}