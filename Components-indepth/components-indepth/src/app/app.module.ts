import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogPostTileComponent } from './blog-post-tile/blog-post-tile.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { TruncatePipe } from './truncate.pipe';
import { PaginatorComponent } from './paginator/paginator.component';
import { BlogDataService } from './blog-data.service';
import { HighlightDirective } from './highlight.directive';
import { CardComponent } from './card/card.component';
import { ShellComponent } from './shell/shell.component';
import { ViewDateComponent } from './view-date/view-date.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostTileComponent,
    BlogListComponent,
    TruncatePipe,
    PaginatorComponent,
    HighlightDirective,
    CardComponent,
    ShellComponent,
    ViewDateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TruncatePipe,
    BlogDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
