import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private age = 0;
private weight = 0;
private feet = 0;
private inches = 0;
private height = 0; // total inches
private bmr = 0; // not settable
private gender = '';
private activityLevel = '';
private daysEx = 0;
private maintCals = 0; // not settable
private goal = '';
private weightChange = 0;
private goalCals = 0;
private calsBurned = 0;

  constructor() { }

// for age
setAge(num) {
  this.age = num;
}

getAge() {
return this.age;
}

// for weight
setWeight(pounds) {
  this.weight = pounds;
}

getWeight() {
return this.weight;
}

// for height
setInches(inches) {
  this.inches = inches;
}

setFeet(feet) {
  this.feet = feet;
}

calcHeight() {
this.height = (this.feet * 12) + this.inches;
}

setHeight(inches) {
  this.height = inches;
}

getHeight() {
return this.height;
}

// for basal metabolic rate
calculateBmr() {
this.weight = this.weight * .453592;
this.height = this.height * 2.54;
this.bmr = (10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5;
if (this.gender === 'Female') {
  this.bmr = this.bmr - 166;
}
}

getBmr() {
  return Math.round(this.bmr);
  }

// for gender
getGender() {
  return this.gender;
}

setGender(word) {
  this.gender = word;
}

// for activity level

getActivityLevel() {
  return this.activityLevel;
}

setActivityLevel(word) {
  this.activityLevel = word;
}

calsWithActivityLevel() {
switch (this.activityLevel) {
  case 'Sedentary: Spend most of the day sitting (e.g., bank taller, desk job)':
  this.maintCals = this.bmr * 1.2;
  break;

  case 'Lightly Active: Spend a good part of the day on your feet (e.g., teacher)':
  this.maintCals = this.bmr * 1.375;
  break;

  case 'Active: Spend a good part of the day doing some physical activity (e.g., waitress, mailman)':
  this.maintCals = this.bmr * 1.55;
  break;

  case 'Very Active: Spend most of the day doing heavy physical activity (e.g. bike messenger, carpenter)':
      this.maintCals = this.bmr * 1.725;
      break;
}

// this.maintCals = this.maintCals + (this.bmr * (.5 * (this.daysEx / 10)));
this.maintCals = this.maintCals + (this.daysEx * this.calsBurned) / 7;

}

// for maintinence calories

getMaintCals() {
  return Math.round(this.maintCals);
}

// for excercise

getDaysEx() {
  return this.daysEx;
}

setDaysEx(days) {
  this.daysEx = days;
}

// for goal
getGoal() {
  return this.goal;
}

setGoals(word) {
this.goal = word;
}

// for weight loss goal per week
getWeightChange() {
  return this.weightChange;
}

setWeightChange(pounds) {
this.weightChange = pounds;
}

// for goalCals
calcGoalCals() {
  switch (this.goal) {
    case 'lose weight':
    this.goalCals = this.maintCals - (3500 * this.weightChange) / 7;
    break;
    case 'gain weight':
    this.goalCals = this.maintCals + (3500 * this.weightChange) / 7;
    break;
    case 'maintain current weight':
    this.goalCals = this.maintCals;
    break;
  }
}

getGoalCals() {
  return Math.round(this.goalCals);
}

// for calsBurned
setCalsBurned(cals) {
this.calsBurned = cals;
}

getCalsBurned() {
return this.calsBurned;
}


}
