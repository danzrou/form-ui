import { ChangeDetectionStrategy, Component, HostBinding, Input, Optional, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-form-row',
  templateUrl: './form-row.component.html',
  styleUrls: ['./form-row.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormRowComponent {
  @HostBinding('class.form-row')
  baseClass = true;

  @Input() control: FormControl;
  @Input() controlName: string;

  constructor(@Optional() private form: FormGroupDirective) {}

  @HostBinding('class.invalid')
  get invalid() {
    return this.formControl && this.formControl.invalid;
  }

  get required() {
    return this.validate(this.formControl);
  }

  get formControl() {
    return (
      this.control ||
      (this.form && this.form.control.get(this.controlName)) ||
      null
    );
  }

  private validate(control: AbstractControl) {
    return (
      control.validator &&
      control.validator(new FormControl()).hasOwnProperty('required')
    );
  }
}
