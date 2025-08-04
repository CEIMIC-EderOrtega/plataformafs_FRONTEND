import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { Ripple } from 'primeng/ripple';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ButtonModule, StyleClassModule, Ripple, OverlayPanelModule],
  templateUrl: './app.topbar.component.html'
})

export class AppTopbarComponent {

  menu: MenuItem[] = [];

  @ViewChild('menubutton') menuButton!: ElementRef;

  constructor(public layoutService: LayoutService) {}

  onMenuButtonClick() {
    this.layoutService.onMenuToggle();
  }

  removeTab(event: MouseEvent, item: MenuItem, index: number) {
    this.layoutService.onTabClose(item, index);
    event.preventDefault();
  }

  get layoutTheme(): string {
    return this.layoutService.config.layoutTheme;
  }

  get colorScheme(): string {
    return this.layoutService.config.colorScheme;
  }

  get logo(): string {
    const path = 'assets/layout/images/logo-';
    const logo = (this.layoutTheme === 'primaryColor'  && !(this.layoutService.config.theme  == "yellow")) ? 'light.png' : (this.colorScheme === 'light' ? 'dark.png' : 'light.png');
    return path + logo;
  }

  get tabs(): MenuItem[] {
    return this.layoutService.tabs;
  }

}
