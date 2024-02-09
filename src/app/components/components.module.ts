import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserCardComponent
  ],
  exports: [
    UserListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule {}
