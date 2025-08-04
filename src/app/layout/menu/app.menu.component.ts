import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
import { AppMenuitemComponent } from './app.menuitem.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, AppMenuitemComponent],
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboard', icon: 'pi pi-home',
                items: [
                    { label: 'Intranet', icon: 'pi pi-desktop', routerLink: ['/main/dashintranet'] },
                    { label: 'Cliente', icon: 'pi pi-chart-bar', routerLink: ['/main/dashcliente'] }
                ]
            },
            {
                label: 'Administración',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'RR. HH.',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Personal',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login'],
                                data: {'fullPage': true}
                            },
                            {
                                label: 'Planilla',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error'],
                                data: {'fullPage': true}
                            },
                            {
                                label: 'Permisos',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access'],
                                data: {'fullPage': true}
                            }
                        ]
                    },
                    {
                        label: 'Contabilidad',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Presupuesto',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login'],
                                data: {'fullPage': true}
                            },
                            {
                                label: 'Viaticos',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error'],
                                data: {'fullPage': true}
                            },
                            {
                                label: 'Caja',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access'],
                                data: {'fullPage': true}
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Organismo Inspeccion',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Ctrl. Proveedores',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Maestros',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login'],
                                data: {'fullPage': true}
                            },
                            {
                                label: 'Planilla',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error'],
                                data: {'fullPage': true}
                            },
                            {
                                label: 'Permisos',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access'],
                                data: {'fullPage': true}
                            }
                        ]
                    },
                    {
                        label: 'Insp. Tiendas Tottus',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Presupuesto',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login'],
                                data: {'fullPage': true}
                            },
                            {
                                label: 'Viaticos',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error'],
                                data: {'fullPage': true}
                            },
                            {
                                label: 'Caja',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access'],
                                data: {'fullPage': true}
                            }
                        ]
                    }
                ]
            },
        ];

    };

}
