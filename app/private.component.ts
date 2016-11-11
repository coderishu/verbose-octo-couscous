import {Component} from 'angular2/core';
import {AuthenticationService} from './authentication.service'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
            <div class="container" >
                <div class="content">
                    <span>SO Hello Ishu mishra</span>
                    <br />
                    <a (click)="logout()" >Click Here </a>
                </div>
            </div>
    	`
})

export class PrivateComponent {

    constructor(
        private _service:AuthenticationService){}

    ngOnInit(){
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}