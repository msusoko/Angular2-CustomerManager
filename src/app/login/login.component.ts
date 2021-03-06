import { Component, OnInit } from 'angular2/core';
import { IUserLogin } from '../shared/interfaces';
import { AuthService } from '../shared/services/auth.service';

@Component({ 
  selector: 'login',
  templateUrl: 'app/login/login.component.html'
})
export class LoginComponent implements OnInit {
    
    userLogin: IUserLogin = {
        email: null,
        password: null
    };
    
    errorMessage: string = null;
    
    constructor(private authService: AuthService) {}
    
    ngOnInit() {
        
    }
    
    onSubmit() {
        this.authService.login(this.userLogin)
            .subscribe((loggedIn: boolean) => {
                if (!loggedIn) {
                    this.errorMessage = 'Unable to login';
                }
                else {
                    this.authService.changeAuth(loggedIn);
                }
                
            });
    }
    
}