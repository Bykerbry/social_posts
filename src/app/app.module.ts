import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocialPostsComponent } from './social-posts/social-posts.component';
import { PostComponent } from './social-posts/post/post.component';
import { PostFormComponent } from './social-posts/post-form/post-form.component';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    SocialPostsComponent,
    PostComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
