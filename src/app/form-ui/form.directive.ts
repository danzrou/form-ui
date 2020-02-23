import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'form[formGroup]'
})
export class FormDirective {
  @HostBinding('class.form-dialog')
  baseClass = true;

  @Input() formCols: 2 | 3 = 2;

  @HostBinding('class.two-cols')
  get twoCols() {
    return this.formCols === 2;
  }

  @HostBinding('class.three-cols')
  get threeCols() {
    return this.formCols === 3;
  }
}
