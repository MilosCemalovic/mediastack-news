import { Article } from './../model/article'
import { CategoriesService } from './../categories.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  articles: Article[]
  searchArticle: string
  order = 'asc'
  loading = true

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getNews()
  }

  getNews() {
    this.categoriesService.getTechnologyNews(this.order).subscribe(
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
