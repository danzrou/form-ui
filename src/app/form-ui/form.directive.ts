import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'form[formGroup]'
})
export class FormDirective {
  @HostBinding('class.form-dialog')
  baseClass = true;

  @Input()
  formLayout: 'two-cols' | 'three-cols' = 'two-cols';

  @HostBinding('class.two-cols')
  get twoCols() {
    return this.formLayout === 'two-cols';
  }

  @HostBinding('class.three-cols')
  get threeCols() {
    return this.formLayout === 'three-cols';
  }
}
