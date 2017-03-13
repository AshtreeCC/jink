// angular
import { Component, OnInit }                    from '@angular/core';
//import { Input, Output, EventEmitter }          from '@angular/core';
import { ChangeDetectionStrategy }              from '@angular/core';
import { Router }                               from '@angular/router';

// services
import { TaskService }                          from '../../services/task.service';
import { AuthService }                          from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

    private title: string;
    private tasks;

    constructor(private ts: TaskService, private auth: AuthService, private router: Router) { 
    
    }

    ngOnInit() {
        
    }

    clear() {
        this.title = "";
    }

    createTask() {
        if (this.title.length) {
            this.ts.createTask(this.title);
            this.title = '';
        }
    }

    deleteTask(key: string) {
        this.ts.deleteTask(key);
    }

}
