import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';


@Component({
  selector: 'info-page',
  imports: [CommonModule],
  templateUrl: './info-page.component.html',
})
export class InfoPageComponent implements OnInit, AfterViewInit {

  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  backgroundType: 'video' | 'imagen' | 'texto' = 'video';
  showPlayButton = false;

  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }

  ngAfterViewInit() {
    if (this.backgroundType === 'video' && this.bgVideo?.nativeElement) {
      const video = this.bgVideo.nativeElement;

      video.play().catch(err => {
        console.warn('Autoplay bloqueado por el navegador:', err);
        this.showPlayButton = true;
        this.playVideo();
      });

      video.addEventListener('pause', () => {
        this.showPlayButton = true;
      });

      video.addEventListener('playing', () => {
        this.showPlayButton = false;
      });
    }
  }

  playVideo() {
    console.log('Intentando reproducir el video');
    this.bgVideo.nativeElement.play().catch(err => {
      console.warn('No se pudo reproducir manualmente:', err);
    });
  }
}
