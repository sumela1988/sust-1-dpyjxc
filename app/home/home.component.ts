import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import { products } from '../products';


@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    users: User[] = [];
    products = products;
    names =[];

    addName(newName: string) {
    if (newName) {
      this.names.push(newName);
    }
    localStorage.setItem('names', JSON.stringify(this.names));
  }

    clearNames(){
      this.names=[];
      return this.names;
    }

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
            this.products = products;
        });
        this.
    }
}