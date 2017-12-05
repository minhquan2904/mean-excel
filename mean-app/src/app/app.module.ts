import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { routing } from './app.routing';
import { FormsModule }   from '@angular/forms';
import { AuthGuard } from './_guards/index';
import { customHttpProvider } from './_helpers/index';
import { AuthenticationService,AlertService } from './_services/index'

import { AlertComponent } from './_directives/index';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookService } from './book.service';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminNavbarComponent } from './admin/layout/admin-navbar/admin-navbar.component';
import { AddFileComponent } from './admin/add-file/add-file.component';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    HomeComponent,
    LoginComponent,
    AdminNavbarComponent,
    AddFileComponent,
    FileSelectDirective 
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [
    BookService,
    AuthGuard,
    AuthenticationService,
    AlertService,
    customHttpProvider,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})


export class AppModule { }
