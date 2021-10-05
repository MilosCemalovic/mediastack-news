import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  articles: Article[]
  searchArticle: string
  order = 'desc'
  loading = true

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getNews()
  }

  getNews() {
    this.categoriesService.getSportsNews(this.order).subscribe(
      (news) => {
        this.loading = false
        this.articles = news.data
      },
      (err) => {
        this.loading = false
        this.articles = []
      }
    )
  }

  onScroll() {
    console.log('scrolled!!')
  }

  sortAsc() {
    this.order = 'asc'
    this.getNews()
  }

  sortDesc() {
    this.order = 'desc'
    this.getNews()
  }
}
