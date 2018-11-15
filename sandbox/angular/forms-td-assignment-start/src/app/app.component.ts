import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') form: NgForm;
  submitted = false;
  defaultSubscription = 'advanced';
  data: { email: string, subscription: string, password: string } = {email: '', subscription: '', password: ''};

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    this.data = {...this.form.value};
    this.form.reset();
  }
}
