import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UserRoutingModule } from './users-routing.module';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [UserRoutingModule, CommonModule, ComponentsModule, AsyncPipe],
})
export class UserModule {}
