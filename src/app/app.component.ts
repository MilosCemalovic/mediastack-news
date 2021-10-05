import { Component } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navItems: MenuItem[] = [
    {id: 'technology', label: 'Technology', routerLink: ['technology'], visible: true},
    {id: 'sports', label: 'Sports', routerLink: ['sports'], visible: true}
  ]
}
