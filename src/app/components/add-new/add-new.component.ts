import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../models/Feedback';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { FeedbackService } from '../../services/feedback.service';

import { Http } from '@angular/http';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  feedback:Feedback = {
    name:'',
    body:'',
    category:''
  };
  sendFalse:boolean = false;

  constructor(
    private fms:FlashMessagesService,
    private router:Router,
    private fs:FeedbackService,
    private http:Http,
    private dispState:FeedbackComponent
  ) {}

  ngOnInit() {
  }

  onSubmit({value, valid}:{value:Feedback, valid:boolean}){
    if(!valid){
      this.fms.show('Please fill in all fields',{
        cssClass:'alerty red lighten-3', timeout: 5000
      });
      console.log(value, valid);
    } else {
      // Add New Client
      this.fs.newFeedback(value);
      this.fms.show('New Entry Added!',{
        cssClass:'alerty green lighten-4', timeout: 5000
      });
      //this.fs.passVal(false);
      this.router.navigate(['/']);
      this.dispState.ngOnInit();
      //window.location.reload();
      console.log(value, valid);
    }
  }

}
