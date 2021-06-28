import { Component, OnInit, Input, ViewChild, ViewChildren, QueryList} from '@angular/core';
import { BlogDataService } from '../blog-data.service';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[][];
  currentPage : number;

 // @ViewChild('tile') blogPostTileComponent: BlogPostTileComponent;
  @ViewChildren('tile') blogPostTileComponents: QueryList<BlogPostTileComponent>;
  

  constructor(private blogDataService:BlogDataService) { 
    
  }

  ngOnInit(): void {
  
    this.currentPage = 0;
    this.blogPosts = this.blogDataService.getData();
    
  }

  updatePage(newPage){
    console.log("Event emitted");
    this.currentPage = newPage;
  }

  expandAll(){
    this.blogPostTileComponents.forEach(e => e.showFullSummary());
  }

  favAll(){
    this.blogPosts[this.currentPage].forEach(e => e.isFav = true);
  }

}
