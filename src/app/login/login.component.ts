import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
username='';
password='';

private auth=inject(AuthService);
private router=inject(Router);

login():void{
  if(this.username!=="shahim" || this.password!=="shahim@2000"){
    alert('please enter the correct username and password');
    return;
  }

  this.auth.login(this.username.trim())
  this.router.navigate(['/home']);
}
}
