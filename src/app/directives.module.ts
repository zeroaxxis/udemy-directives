import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DirectiveComponent } from './directives.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    DirectiveComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [DirectiveComponent]
})
export class AppModule { }
