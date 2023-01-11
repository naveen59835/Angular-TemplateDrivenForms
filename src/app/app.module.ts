import { FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ValidationComponent } from './validation/validation.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    
    ValidationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule
    ,MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
