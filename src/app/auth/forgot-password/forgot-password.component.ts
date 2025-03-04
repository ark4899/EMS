import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthUiSectionComponent } from '../../layouts/auth-ui-section/auth-ui-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterModule, AuthUiSectionComponent, CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

}
