import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passowrd',
  templateUrl: './passowrd.component.html',
  styleUrls: ['./passowrd.component.scss'],
})
export class PassowrdComponent {
  public passwordStengthPercent: number = 0;

  public currentPassword: string = '';

  public set password(value: string) {
    this.currentPassword = value;
    this.updatePasswordStrength (value)
  }
  public get password(): string {
    return this.currentPassword;
  }
  public get hasCaopitalLetter(): boolean {
    return /(.*[A-Z].*)/.test(this.password);
  }

  public get is8CharacterOrGreater(): boolean {
    return this.password.length >= 8;
  }

  public get hasNumber(): boolean {
    return /(.*\d.*)/.test(this.password);
  }

  public get hasSpecialCharacter(): boolean {
    return /\W|_/.test(this.password);
  }
  public updatePasswordStrength(value:string): void {
    let strength = 0;

    if (this.is8CharacterOrGreater) {
      strength += 25;
    }
    if (this.hasCaopitalLetter) {
      strength += 25;
    }
    if (this.hasNumber) {
      strength += 25;
    }
    if (this.hasSpecialCharacter) {
      strength += 25;
    }
    this.passwordStengthPercent = strength;
  }
}
