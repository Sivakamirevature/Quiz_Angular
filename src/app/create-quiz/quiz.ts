import { Time } from '@angular/common';

export class Quiz{
	private  quiz_name:string;
	private  tags:string;
	private activity_points:number;
	private duration:Time ;
	private max_no_of_attempts:number;
	private level_override:boolean;
	private slug:string;
	private description:string;
	private meta_keywords:string;
	private meta_description:string;
	private icon:string;
	private instructions:string;
	private pass_percentage:number;
	private is_available_pre_signup;
	private is_available_via_slug:boolean;
	private is_available_dashboard:boolean;
	private is_timer_enabled:boolean;
	private is_shuffle_questions:boolean;
	private is_shuffle_answers:boolean;
	private is_display_score:boolean;
	private is_allow_attempt_review:boolean;
	private is_show_whether_correct:boolean;
	private is_show_correct_answers_passed:boolean;
	private is_show_correct_answers_failed:boolean;
	private is_show_answer_explanations:boolean;
	private is_enable_save_resume:boolean;
	private created_on:any;
	private created_by:string;
	private  modified_on:any;
	private modified_by:string;
	private modified_count:number;
	private level: Level;
	private category: Category;
	private status :boolean;
	private  mode:string;
	private  quizQuestionObj: Array<Quiz_Question>[];  
}

    export class Level{
	private levelId:number;
	private levelName:string;
}

export class Category{
	private categoryId:number;
	private categoryName:string;		
}

export class Quiz_Question{
    private question: Question;
    private pool: Pool;
}

export class Question{
    private id:number;
}

export class Pool{
    private id: number;
}