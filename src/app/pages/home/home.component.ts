// angular
import { Component, OnInit }                    from '@angular/core';
import { Input, Output, EventEmitter }          from '@angular/core';

// services
import { TaskService }                          from '../../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private title: string;
    private tasks;

    constructor(private ts: TaskService) { 
    }

    ngOnInit() {
        this.tasks = this.ts.tasks;
        // for(var task of this.ts.tasks){
        //     console.log(task.$title);
        // }
    }

    createTask(): void {
        if (this.title.length) {
            this.ts.createTask(this.title);
            this.title = '';
        }
    }

    deleteTask(key: string): void {
        this.ts.deleteTask(key);
    }

}
