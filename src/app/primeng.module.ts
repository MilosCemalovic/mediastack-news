import { NgModule } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { MenubarModule } from 'primeng/menubar'
import {CardModule} from 'primeng/card'
import {InputTextModule} from 'primeng/inputtext'
import {ProgressSpinnerModule} from 'primeng/progressspinner'

@NgModule({
  exports: [
    MenubarModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ProgressSpinnerModule
  ],
  providers: []
})
export class PrimengModule { }
