import { Component } from '@angular/core';
import { AuthUiSectionComponent } from "../../layouts/auth-ui-section/auth-ui-section.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CommonModule ,AuthUiSectionComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
