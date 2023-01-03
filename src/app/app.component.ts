import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //access form
  @ViewChild('f') signupForm: NgForm;

  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: '',
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    //Method 1:
    //This approach will also update previous data in fields
    // Good approach if we want to update all the fields of form

    // this.signupForm.setValue({
    //   userData: { username: suggestedName, email: '' },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });

    //Method 2:
    //better approach (only update value required)
    this.signupForm.form.patchValue({ userData: { username: suggestedName } });
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.questionAnswer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
