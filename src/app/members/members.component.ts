import { Component, OnInit, TemplateRef, ViewChild, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'members';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  userList: any;
  user: any;

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService) { 
      this.userList = this.storage.get(STORAGE_KEY);
      this.user = this.storage.get('local_todolist');
      console.log(this.userList);
    }

  ngOnInit() {
  }

}
