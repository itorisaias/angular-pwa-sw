import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '../ui/ui.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule
  ],
  declarations: []
})
export class ContentModule { }
