import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      // sync version
      // 'projectname': new FormControl(null, [Validators.required, this.nameForbidden]),
      'projectname': new FormControl(null, Validators.required, this.asyncNameForbidden),

      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  nameForbidden(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  asyncNameForbidden(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }


}
