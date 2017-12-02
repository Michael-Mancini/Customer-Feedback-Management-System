import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';
import { Feedback } from '../../models/Feedback';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbacks:any[];
  addState:boolean = false;
  deleteState:boolean = false;
  inQuestion:Feedback;

  constructor(private fbs:FeedbackService,
  private fms:FlashMessagesService) { }

  ngOnInit() {
    this.fbs.getFeedbacks().subscribe(feed => {
      //console.log(feed);
      this.feedbacks = feed;
    });
  }

  addItem(){
    this.addState = !this.addState;
  }

  onDeleteClick(event, f:Feedback){
    this.deleteState = true;
    this.inQuestion = f;
  }

  deleteF(event, key:string){
    //delete
    this.fbs.deleteFeedback(key);
    console.log(key+' was deleted');
  }

  changeback(){
    this.clearState();
  }

  clearState(){
    this.inQuestion = null;
    this.deleteState = false;
  }

}
