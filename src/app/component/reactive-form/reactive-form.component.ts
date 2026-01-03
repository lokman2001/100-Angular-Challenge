import { Component, OnInit } from '@angular/core';
import {
  faEnvelope,
  faUser,
  faComment,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  public emailIcon = faEnvelope;
  public nameIcon = faUser;
  public messageIcon = faComment;
  public sendIcon = faPaperPlane;

  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.maxLength(500)]],
    });
  }
}
