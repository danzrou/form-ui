import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'form-helpers';

  group = this.fb.group({
    user: ['', Validators.required],
    pass: ['', Validators.required],
    type: [null, Validators.required]
  });

  types = ['Regular', 'Premium'];

  constructor(private fb: FormBuilder) {}
}
