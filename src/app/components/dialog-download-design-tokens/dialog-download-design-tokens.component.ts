import { Component, OnInit } from '@angular/core';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-dialog-download-design-tokens',
  templateUrl: './dialog-download-design-tokens.component.html',
  styleUrls: ['./dialog-download-design-tokens.component.scss']
})
export class DialogDownloadDesignTokensComponent {

  task: Task = {
    name: 'Web',
    completed: false,
    subtasks: [
      {name: 'JSON', completed: false},
      {name: 'CSS', completed: false},
      {name: 'SCSS', completed: false},
      {name: 'JS', completed: false},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }


}
