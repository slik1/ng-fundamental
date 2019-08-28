import { Injectable } from '@angular/core' //Import an Injectable class
import { IUser } from './user.model'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap, catchError } from 'rxjs/operators'
import { of } from 'rxjs'

@Injectable()

export class AuthService{
    currentUser:IUser

    constructor(private http: HttpClient){}

    loginUser(userName: string, password: string){

        let loginInfo = { username: userName, password: password };
        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};


        //When this call from the server returns, I want to set the current user
        // equal to whatever data comes back, but I don't want to do it in the subscribe method
        // because I don't want to subscribe here.
        
        //I just want to make a side effect
        // And I can make a side effect by piping in a special RxJS operator called tap

        // tap - is a way to tap into the stream and take an action when a piece of data comes through the observable

        // we are not manipulating the value in any way, so we don't want to do something like .map, we want to use the tap method.
        // it let's us just see the value that comes through and we can take an action if want based on that value, but we're
        // not manipulating what's going through the observable stream!

        return this.http.post('/api/login', loginInfo, options)
            .pipe(tap(data => {
                this.currentUser = <IUser>data['user']; // casts user property of data object to an IUser
            }))
            .pipe(catchError(err => {
                return of(false);
            }))

        // this.currentUser = {
        //     id: 1,
        //     userName: userName,
        //     firstName: 'Gary',
        //     lastName: 'Dad'
        // }
    }




    isAuthenticated(){
        return !!this.currentUser;
    }


    checkAuthenticationStatus(){
        this.http.get('/api/currentIdentity')
        // .pipe(tap(data => {
        //     if(data instanceof Object){
        //         this.currentUser = <IUser>data;
        //         console.log(this.currentUser);
        //     }
        // }
        // ));
        
        .subscribe(data => {
            if(data instanceof Object){
                this.currentUser = <IUser>data;
            }
        })
    }


    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);

    }


    logout(){
        this.currentUser = undefined;
        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
        return this.http.post('/api/logout', {}, options);
    }





}