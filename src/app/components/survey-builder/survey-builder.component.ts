
import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface SurveyQuestion {
  text: string;
  type: string;
  options: string[];
  rows?: string[];
  columns?: string[];
  scaleMin?: number;
  scaleMax?: number;
}

@Component({
  selector: 'app-survey-builder',
  templateUrl: './survey-builder.component.html',
  styleUrls: ['./survey-builder.component.css']
})
export class SurveyBuilderComponent {
  survey = {
    title: 'My Survey',
    questions: [] as SurveyQuestion[]
  };

  previewMode = false;

  addQuestion() {
  this.survey.questions.push({
    text: '',
    type: 'short',
    options: [],
    rows: [],
    columns: [],
    scaleMin: 1,
    scaleMax: 5
  });
}

  removeQuestion(index: number) {
    this.survey.questions.splice(index, 1);
  }

  addOption(qIndex: number) {
    this.survey.questions[qIndex].options.push('');
  }

  removeOption(qIndex: number, oIndex: number) {
    this.survey.questions[qIndex].options.splice(oIndex, 1);
  }

  addRow(qIndex: number) {
  const question = this.survey.questions[qIndex];
  if (!question.rows) question.rows = [];
  question.rows.push('');
  }


  removeRow(qIndex: number, rIndex: number) {
    this.survey.questions[qIndex].rows?.splice(rIndex, 1);
  }

  addColumn(qIndex: number) {
  const question = this.survey.questions[qIndex];
  if (!question.columns) question.columns = [];
  question.columns.push('');
  }


  removeColumn(qIndex: number, cIndex: number) {
    this.survey.questions[qIndex].columns?.splice(cIndex, 1);
  }

  drop(event: CdkDragDrop<SurveyQuestion[]>) {
    moveItemInArray(this.survey.questions, event.previousIndex, event.currentIndex);
  }

  togglePreview() {
    this.previewMode = !this.previewMode;
  }
}

