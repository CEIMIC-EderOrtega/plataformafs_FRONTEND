import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
import { AppMenuComponent } from "../menu/app.menu.component";

@Component({
  selector: 'app-sidebar',
  imports: [AppMenuComponent],
  templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {

    @ViewChild('menuContainer') menuContainer!: ElementRef;
    constructor(public layoutService: LayoutService, public el: ElementRef) {}
}
