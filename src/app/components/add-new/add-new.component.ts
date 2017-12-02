import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../models/Feedback';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { FeedbackService } from '../../services/feedback.service';

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

  constructor(
    private fms:FlashMessagesService,
    private router:Router,
    private fs:FeedbackService
  ) {
  }

  ngOnInit() {
  }

  onSubmit({value, valid}:{value:Feedback, valid:boolean}){
    if(!valid){
      this.fms.show('Please fill in all fields',{
        cssClass:'alerty red lighten-3', timeout: 8000
      });
      console.log(value, valid);
    } else {
      // Add New Client
      this.fs.newFeedback(value);
      this.fms.show('New Entry Added!',{
        cssClass:'alerty green lighten-4', timeout: 8000
      });
      this.router.navigate(['/']);
      console.log(value, valid);
    }
  }

}
