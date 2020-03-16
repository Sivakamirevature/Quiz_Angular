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
  isshow : boolean = true;
  quiz: Quiz;
  questions: Array<any> = [];
 quizQuestionObj: FormArray;
 question:Question;
  q:Array<any>=[];
  quizquestion:any;
  

  constructor(private serviceClass:QuizServiceService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getCategoryList();
    this.getLevelList();
    this.form();
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
    this.quizForm.patchValue({poo:{levelId: id}})
  }
  getCheckBoxValue(event){
    this.quizQuestionObj= this.quizForm.get('quizQuestionObj') as FormArray;
    if(event.target.checked){
      this.quizQuestionObj.push(new FormControl(event.target.value));
    }
    else{
      let i:number =0;
      this.quizQuestionObj.controls.forEach((item: FormControl)=> {
        if(item.value == event.target.value){
          this.quizQuestionObj.removeAt(i)
          return;
        }
        i++;
      })
    }
  }
 
  form() {
    this.quizForm = this.formbuilder.group({
      quiz_name: [''],
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
      quizQuestionObj: this.formbuilder.array([])
       });
      }
      createItem(){
        return this.formbuilder.group({
          poolId: '',
          questionId: ''
        });
      }
      
      getQuestions(){
        this.serviceClass.getAllQuestions().subscribe((response : any)=>{
          this.questions = response;
        }
        );
      }

      save(){
        
        for(let i=0;i<this.quizQuestionObj.length;i++)
        {
          console.log("Iterated Value: "+this.quizQuestionObj.value[i])
                              // var qq = new Quiz(this.quizForm.quiz_name, tags1, activity_points1, duration1, max_no_of_Attempts1, level_override1, slug1, description1, meta_keywords1, meta_description1, icon1, instructions1, category1, level1, pass_percentage1, is_available_pre_signup1, is_available_via_slug1, is_available_dashboard1, is_timer_enabled1, is_shuffle_questions1, is_shuffle_answers1, is_display_score1, is_allow_attempt_review1, is_show_whether_correct1, is_show_correct_answers_passed1, is_show_correct_answers_failed1, is_show_answer_explanations1, is_enable_save_resume1, quizQuesObj1)
                              let obj1 = {
                                id: this.quizQuestionObj.value[i],
                              }
                                let obj2 = {Question: obj1, Pool: {id: 1}}
                                this.q.push(obj2);
                            }
                           this.quizquestion = this.q;
                           
                            }
                          }
   