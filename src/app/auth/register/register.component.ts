import { Component } from '@angular/core';
import { AuthUiSectionComponent } from '../../layouts/auth-ui-section/auth-ui-section.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [AuthUiSectionComponent, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
