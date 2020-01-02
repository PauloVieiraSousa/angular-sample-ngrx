import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

  public userForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      profile: ['']
    });
  }

  ngOnInit() {

  }


}
