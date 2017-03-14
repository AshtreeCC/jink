// angular
import { Component, OnInit }                            from '@angular/core';
//import { Input, Output, EventEmitter }                  from '@angular/core';
import { ChangeDetectionStrategy }                      from '@angular/core';
import { Router }                                       from '@angular/router';

// libraries
import { AngularFireOffline, AfoListObservable }        from 'angularfire2-offline';

//app
import { ITask, Task }                                  from '../../models/task.model';

// services
import { TaskService }                                  from '../../services/task.service';
import { AuthService }                                  from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

    private title: string = "";
    private tasks$: AfoListObservable<any>;

    constructor(private taskService: TaskService, private authService: AuthService, private router: Router) { 
        this.tasks$ = taskService.tasks.map((array) => array.reverse()) as AfoListObservable<any[]>;
    }

    ngOnInit() {
        
    }

    clearTask() {
        this.title = "";
    }

    createTask() {
        if (this.title.length) {
            this.taskService.createTask(this.title);
            this.title = "";
        }
    }
    
    toggleDone(task: ITask) {
        this.taskService.updateTask(task, {completed: !task.completed});
    }

    updateTask(event) {
        this.taskService.updateTask(event.task, {title: event.title});
    }

    deleteTask(task: ITask) {
        this.taskService.deleteTask(task);
    }


}
