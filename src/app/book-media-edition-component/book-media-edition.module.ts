import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookMediaEditionComponent } from './book-media-edition-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BlogModule } from './blog/blog.module';
import { ArticleComponent } from './blog/article/article.component';
import { ArticlesComponent } from './blog/articles/articles.component';
import { LocalStorageService } from './shared/services/local-storage.service';
import { EditArticleComponent } from './blog/edit-article/edit-article.component';
import { FrontendStorageService } from './shared/services/frontend-storage.service';

@NgModule({
    declarations: [
        BookMediaEditionComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            {
                path: 'blog', children: [
                    {path: 'blog', redirectTo: 'articles', pathMatch: 'prefix'},
                    {path: 'articles', component: ArticlesComponent},
                    {path: 'article/:articleId', component: ArticleComponent},
                    {path: 'edit-article', component: EditArticleComponent}
                ]
            },
        ]),
        BlogModule
    ],
    providers: [FrontendStorageService, LocalStorageService],
    bootstrap: [BookMediaEditionComponent]
})
export class BookMediaEditionModule {
}
