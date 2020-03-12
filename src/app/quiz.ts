export class Quiz {
    private quiz_id:number;
	private  quiz_name:String;
	private tags:string;
	private activity_points:string;
	private duration:any;
	private max_no_of_attempts:any;
	private level_override:boolean;
	private slug:string;
	private description:string;
	private meta_keywords:string;
	private meta_description:string;
	private icon:string;
	private instructions:string;
    private pass_percentage:number;
	private is_available_pre_signup:boolean;
	private is_available_via_slug:boolean;
	private is_available_dashboard:boolean;
	private is_timer_enabled:boolean;
	private is_shuffle_questions:boolean;
	private is_shuffle_answers:boolean;
	private is_display_score:boolean;
	private is_allow_attempt_review:boolean;
	private is_show_correct_answers_passed:boolean;
	private is_show_correct_answers_failed:boolean;
	private is_show_answer_explanations:boolean;
	private  is_enable_save_resume:boolean;
	private created_on:Date = new Date(); ;
	private created_by:string;
	private modified_on:Date =  new Date();
	private modified_by:string;
	private modified_count:number;
    private level:Level = new Level();
    private  category:Category= new Category();
    private quizpoolquestion:Array<QuizPoolQuestion>;
}

export class Category{
    private categoryId:number;
    private categoryName:number;
}
export class Level{
    
}

export class QuizPoolQuestion{

}


