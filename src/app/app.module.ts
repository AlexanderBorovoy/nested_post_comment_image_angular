import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PostComponent} from './post/post.component';
import { AppComponent } from './app.component';
import { CommentComponent } from './post/comment/comment.component';
import { ImageComponent } from './post/comment/image/image.component';
import { UPLOAD_DIRECTIVES } from 'ng2-uploader/ng2-uploader';
@NgModule({
  declarations: [
    AppComponent,PostComponent, CommentComponent, UPLOAD_DIRECTIVES, ImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
