import { Component } from '@angular/core';

interface Iarticle {
    title: string;
    content: string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements Iarticle  {
    title = "Component 3000"
    content = "A Cool Feature"
}
