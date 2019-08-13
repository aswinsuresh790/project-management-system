import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { StorageServiceModuleService } from '../storage.service';
import { User } from '../model/user';
import { DatabaseApiService } from '../database.service';

const STORAGE_KEY = 'local_todolist';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  userList: any;
  User: User[];
  error = '';
  success = '';

  constructor(public router: Router,@Inject(LOCAL_STORAGE) private storage: StorageService,public localstorageservice: StorageServiceModuleService
  ,public databaseapi: DatabaseApiService) {
    this.user = this.storage.get(STORAGE_KEY);
   }
   
  ngOnInit() {
    console.log(this.storage.get(STORAGE_KEY));
    setTimeout(() => {
      // console.log(this.userList);
      this.localstorageservice.storeMembers(this.userList.members);
      }, 1000);
      this.getUser();
  }
  
  dashboard(){
    this.router.navigate(['dashboard']);
  }
  task(){
    this.router.navigate(['task']);
  }
  space(){
    this.router.navigate(['spaces']);
  }
  member(){
    this.router.navigate(['members']);
  }
  logout(){
    this.router.navigate(['logout']);
  }


  getUser(){
    this.databaseapi.getuser().subscribe(
      (res: User[]) => {
        this.User = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

}


