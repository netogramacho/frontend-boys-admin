import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './user-details.component';

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [UserDetailsRoutingModule, CommonModule, ComponentsModule, DatePipe]
})
export class UserDetailsModule {}
