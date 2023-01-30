import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators, NgForm} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { HttpClientModule, HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  constructor(private fb:FormBuilder, private auth:AuthService,private router:Router,private httpClient:HttpClient) {
    this.loginForm = this.fb.group({
      'email':['', Validators.required],
      'password':['', Validators.required],
    })
   }

  ngOnInit(): void {
  }
  login(){
    //alert("Login Successfull")
    const data = this.loginForm.value;
    this.auth.signin(data).subscribe((res)=>{
      if(res.success){
        localStorage.setItem('token', res.token)
        if(this.loginForm.value['email'],this.loginForm.value['password']){
          this.router.navigate(['home']);
         }
         else
         {
          alert("Please Fill in Your Account Details....!!!")
         }

      }else{
        alert(res.message)
      }
    },err=>{
      alert("Login failed !!")
    })
  }
}
