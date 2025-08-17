import { Component } from '@angular/core'

@Component({
    selector: 'app-header',
   // standalone: true,    remains true for angular version 19 and beyond
   standalone: false,
    templateUrl: './header.html',
    styleUrls: ['./header.css']
})
export class HeaderComponent{}