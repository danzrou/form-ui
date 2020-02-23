import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SmpButtonModule, SmpInputModule, SmpOverlayModule, SmpSelectModule } from '@siemplify/ui';
import { AppComponent } from './app.component';
import { FormUiModule } from './form-ui/form-ui.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SmpButtonModule,
    ReactiveFormsModule,
    FormUiModule,
    SmpInputModule,
    SmpSelectModule,
    SmpOverlayModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
