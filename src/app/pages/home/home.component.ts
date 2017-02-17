import { Component, OnInit }                    from '@angular/core';
import { Input, Output, EventEmitter }          from '@angular/core';

// Services
import { TaskService }                          from '../../services/task.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    @Output() createTask = new EventEmitter();

    private newTask: string;
    private tasks = [];


    constructor(private ts: TaskService) { 
    }

    ngOnInit() {
        this.tasks = this.ts.getTasks();
    }

    submit():void {
        if (this.newTask.length) {
            this.createTask.emit(this.newTask)
        }
    }

}
