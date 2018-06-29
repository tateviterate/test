import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Login, AuthState } from './../../../core/store/auth/';

@Component({
  selector: 'dg-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LoginFormComponent implements OnInit {

  validateForm: FormGroup;
  @Select(AuthState.isLoading) public isLoading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      UserName: [null, [Validators.required]],
      Password: [null, [Validators.required]],
      Language: ['en', [Validators.required]],
    });
  }

  submit(): void {

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      const { UserName, Password } =  this.validateForm.value;

      this.store.dispatch(new Login({ UserName, Password }));
    }
  }
}
