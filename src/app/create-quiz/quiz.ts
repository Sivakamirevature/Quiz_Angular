import { Time } from '@angular/common';

export class Quiz{
    quiz_id : number;
    quizName: string;
    tags : string;
    activityPoints : number;
    duration:Time;
    max_no_of_attempts: number;
    levelOverride: boolean;
    slug: string;
    description: string;
    metaKeywords: string;
    metaDescription: string;
    icon: string;
    instruction: string;
    passPercentage: number;
    isAvailablePreSignup: boolean;
    isAvailableViaSlug: boolean;
    isAvailableDashboard: boolean;
    isTimerEnabled: boolean;
    isShuffleQuestions: boolean;
    isShuffleAnswers: boolean;
    isDisplayScores: boolean;
    isAllowAttempt_review: boolean;
    isShowCorrectAnswersPassed: boolean;
    isShowCorrectAnswersFailed: boolean;
    isShowAnswerExplanations: boolean;
    isEnableSaveResume: boolean;
    levelId: number;
    categoryId: number;
    status: boolean;
}