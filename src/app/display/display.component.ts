import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

basalMetabolicRate = 100;
maintenenceCals = 100;
age1 = 100;
weight1 = 100;
height1 = 100;
gender1 = 'none';
activityLevel1 = 'none';
daysExcercised = 0;
fitnessGoal = 'none';
goalCalories = 0;
caloriesBurned = 0;
weightChange = 0;


dService: DataService;

  constructor(dService1: DataService) {
    this.dService = dService1;
   }

  ngOnInit() {
    this.age1 = this.dService.getAge();
    this.weight1 = this.dService.getWeight();
    this.height1 = this.dService.getHeight();
    this.gender1 = this.dService.getGender();
    this.activityLevel1 = this.dService.getActivityLevel();
    this.daysExcercised = this.dService.getDaysEx();
    this.fitnessGoal = this.dService.getGoal();
    this.caloriesBurned = this.dService.getCalsBurned();
    this.weightChange = this.dService.getWeightChange();


    this.dService.calculateBmr();
    this.basalMetabolicRate = this.dService.getBmr();
    this.dService.calsWithActivityLevel();
    this.maintenenceCals = this.dService.getMaintCals();
    this.dService.calcGoalCals();
    this.goalCalories = this.dService.getGoalCals();
  }

}
