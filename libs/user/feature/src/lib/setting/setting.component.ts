import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserService } from '@realworld/user/shared';
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'realworld-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  form: FormGroup

  constructor(
    private userService: IUserService, 
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.initForm()
  }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout()
    this.router.navigate(['/'])
  }

  private initForm() {
    this.form = this.fb.group({
      image: [null, [CustomValidators.url, Validators.maxLength(255)]],
      username: [null, [Validators.required, Validators.maxLength(60)]],
      bio: [null, [Validators.maxLength(1000)]],
      email: [null, [Validators.required, Validators.maxLength(60), CustomValidators.email]],
      password: [null, [Validators.maxLength(200)]],
    })
  }

  async update() {
    await this.userService.update(this.form.value).toPromise()
  }

}
