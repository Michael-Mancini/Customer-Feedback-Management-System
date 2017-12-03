import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Feedback } from '../models/Feedback';

@Injectable()
export class FeedbackService {
  feedbackRef:AngularFireList<any>;
  feedbacks:Observable<any[]>;
  feedback:Observable<any>;

  constructor(private db:AngularFireDatabase) {
    this.feedbackRef = this.db.list('emails');
    this.feedbacks = this.feedbackRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
    });
  }

  getFeedbacks(){
    return this.feedbacks;
  }

  newFeedback(feedback:Feedback){
    this.feedbackRef.push(feedback);
  }

  deleteFeedback(key:string){
    return this.feedbackRef.remove(key);
  }

  passVal(disp:boolean){
    return disp;
  }

}
