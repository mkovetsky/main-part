import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { MaterialModules } from './material';

const SHARED_MODULES = [
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModules,
    UiSwitchModule,
    InputsModule
]

@NgModule({
  imports: [
    CommonModule,
    DndModule.forRoot(),
    ...SHARED_MODULES
  ],
  exports : [SHARED_MODULES, DndModule],
  declarations: []
})
export class SharedModule { }
