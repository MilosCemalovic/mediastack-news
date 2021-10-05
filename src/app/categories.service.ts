import { environment } from './../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { News } from './model/news'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiTechnology = environment.apiUrlTechnology
  private apiSports = environment.apiUrlSports

  constructor(private http: HttpClient) { }

  getTechnologyNews(order: string): Observable<News> {
    return this.http.get<News>(`${this.apiTechnology}${order}`)
  }

  getSportsNews(order: string): Observable<News> {
    return this.http.get<News>(`${this.apiSports}${order}`)
  }

}
