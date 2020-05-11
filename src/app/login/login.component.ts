import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder, private authService: AuthService, private router: Router) {
   this.form = this.fb.group({
       username: ['', Validators.required ],
       password: ['', Validators.required ]
    });
  }

  get username(){return this.form.controls.username}
  get password(){return this.form.controls.password}

  login() {
    console.log("Login called");
    const val = this.form.value;

    if (val.username && val.password) {
        this.authService.login(val.username, val.password)
            .subscribe(
                () => {
                    console.log("User is logged in");
                    this.router.navigateByUrl('/');
                }
            );
    }
  }
  ngOnInit() {
  }

}