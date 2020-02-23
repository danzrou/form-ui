import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormRowComponent } from './form-row/form-row.component';
import { FormDirective } from './form.directive';

@NgModule({
  declarations: [FormRowComponent, FormDirective],
  exports: [
    FormRowComponent,
    FormDirective
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class FormUiModule {}
