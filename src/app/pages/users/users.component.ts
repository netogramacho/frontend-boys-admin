import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users$!: Observable<any[]>;
  constructor(private userService: UserService) {
    userService.getUsers();
  }

  ngOnInit(): void {
    this.users$ = this.userService.users$;
  }
}
