import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../material/material.module';

import {DataTableModule} from '../ng-data-table';
import {ModalComponent} from './components/modal/modal.component';
import {OrderPipe} from './pipes/order.pipe';
import {FormComponent} from './components/form/form.component';
import {CrudTableComponent} from './components/crud-table/crud-table.component';
import {ModalEditFormComponent} from './components/modal-edit-form/modal-edit-form.component';
import {InputComponent} from './components/form/input.component';
import {InputOptionComponent} from './components/form/input-option.component';
import {SelectComponent} from './components/form/select.component';
import {CheckboxComponent} from './components/form/checkbox.component';
import {RadioComponent} from './components/form/radio.component';
import {InputTextComponent} from './components/form/input-text.component';
import {TextareaComponent} from './components/form/textarea.component';
import {CalendarComponent} from './components/form/calendar.component';
import {ModalSelectComponent} from './components/modal-select/modal-select.component';
import {PopupSelectComponent} from './components/form/select-popup.component';
import {RowViewComponent} from './components/row-view/row-view.component';
import {RowMenuComponent} from './components/row-menu/row-menu.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DataTableModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    CrudTableComponent,
    ModalComponent,
    OrderPipe,
    FormComponent,
    ModalEditFormComponent,
    InputComponent,
    InputOptionComponent,
    SelectComponent,
    CheckboxComponent,
    RadioComponent,
    InputTextComponent,
    TextareaComponent,
    CalendarComponent,
    ModalSelectComponent,
    PopupSelectComponent,
    RowViewComponent,
    RowMenuComponent,
  ],
  exports: [
    CrudTableComponent,
    ModalComponent,
    ModalEditFormComponent,
  ],
  providers: []
})
export class CrudTableModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
