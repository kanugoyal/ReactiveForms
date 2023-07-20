import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForms';

  reactiveForm: FormGroup;

  ngOnInit(){
    this.reactiveForm=new FormGroup({
      firstname: new FormControl('Abby'),
      lastname: new FormControl('James'),
      email: new FormControl('ajames@abc.com'),
      gender: new FormControl('female'),
      country: new FormControl('canada'),
      hobbies: new FormControl(null),
    });
  }

  onSubmit(){
    return this.reactiveForm;

  }
}
