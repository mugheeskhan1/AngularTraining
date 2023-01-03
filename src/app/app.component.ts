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
    console.log(form);
  }
}
