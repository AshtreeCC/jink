// angular
import { Component, OnInit }                            from '@angular/core';
import { Input, Output, EventEmitter }                  from '@angular/core';

import { ITask }                                        from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

    @Input() task: ITask;
    @Input() editMode: boolean;

    @Output() toggleDone: EventEmitter<ITask> = new EventEmitter<ITask>();
    @Output() deleteTask: EventEmitter<ITask> = new EventEmitter<ITask>();
    @Output() updateTask = new EventEmitter();

    title: string;

    constructor() { 
    }

    ngOnInit() {
        this.title = this.task.title;
    }
    

    cancelEdit() {
        this.task.title = this.title;
        this.editMode = false; 
    }

    editTask() {
        this.editMode = false;
        if (this.task.title != this.title) {
            this.updateTask.emit({task: this.task, title: this.title});
        }
    }

    toggleEdit() {
        this.title = this.task.title;
        this.editMode = !this.editMode;
    }

}
