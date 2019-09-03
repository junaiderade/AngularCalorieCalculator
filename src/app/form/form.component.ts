import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

dService: DataService; // this just makes a variable of type data service

  constructor(dService1: DataService) {
  this.dService = dService1;
  }

  ngOnInit() {
  }

onSubmit(submittedForm) { // when the form is submitted this method takes all the info from the form and puts it in the service
  this.dService.setInches(submittedForm.value.in);
  this.dService.setFeet(submittedForm.value.ft);
  this.dService.setAge(submittedForm.value.age);
  this.dService.setWeight(submittedForm.value.weight);
  this.dService.setGender(submittedForm.value.gender);
  this.dService.setHeight(submittedForm.value.height);
  this.dService.setActivityLevel(submittedForm.value.activityLevel);
  this.dService.setDaysEx(submittedForm.value.excercise);
  this.dService.setGoals(submittedForm.value.goal);
  this.dService.setCalsBurned(submittedForm.value.calsBurned);
  this.dService.setWeightChange(submittedForm.value.weightChange);
}

}
