/* tslint:disable:no-string-literal */

import * as firebase from 'firebase'; 

export interface ITask {
  $key?: string;
  completed: boolean;
  createdAt;
  title: string;
}

export class Task implements ITask {
  completed: boolean = false;
  createdAt = firebase.database['ServerValue']['TIMESTAMP'];
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}
