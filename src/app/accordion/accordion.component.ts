import { Component, Input } from '@angular/core';
import { Config, Menu } from '../types';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() options:any;
  @Input() menus!: Menu[];
  config!: Config;
  
  ngOnInit() {
    this.config = this.mergeConfig(this.options);
  }

  mergeConfig(options: Config) {
    const config = {
      multi: true
    };

    return { ...config, ...options };
  }

  toggle(index: number) {
    if (!this.config.multi) {
      this.menus.filter(
        (menu, i) => i !== index && menu.active
      ).forEach(menu => menu.active = !menu.active);
    }

    this.menus[index].active = !this.menus[index].active;
  }
}
  // menuItems = [
  //   {
  //     title: 'Menu 1',
  //     active: false,
  //     subItems: [
  //       { title: 'Submenu 1' },
  //       { title: 'Submenu 2' },
  //       { title: 'Submenu 3' }
  //     ]
  //   },
  //   {
  //     title: 'Menu 2',
  //     active: false,
  //     subItems: [
  //       { title: 'Submenu 1' },
  //       { title: 'Submenu 2' },
  //       { title: 'Submenu 3' }
  //     ]
  //   },
  //   {
  //     title: 'Menu 3',
  //     active: false,
  //     subItems: [
  //       { title: 'Submenu 1' },
  //       { title: 'Submenu 2' },
  //       { title: 'Submenu 3' }
  //     ]
  //   }
  // ];

  // toggleAccordion(item:any): void {
  //   this.menuItems.forEach((element) => {
  //     if (item === element) {
  //       element.active = !element.active;
  //     } else {
  //       element.active = false;
  //     }
  //   });
  // }

  // menuItems = [
  //   {
  //     title: 'Item 1',
  //     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
     

  //     open: false
  //   },
  //   {
  //     title: 'Item 2',
  //     content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     open: false
  //   },
  //   {
  //     title: 'Item 3',
  //     content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     open: false
  //   }
  // ];

  // toggleAccordion(item:any) {
  //   item.open = !item.open;
  // }


  // data: any[] = [
  //   { title: 'Item 1', category: 'category1', description: 'Description 1', expanded: false },
  //   { title: 'Item 2', category: 'category2', description: 'Description 2', expanded: false },
  //   { title: 'Item 3', category: 'category1', description: 'Description 3', expanded: false },
  //   { title: 'Item 4', category: 'category3', description: 'Description 4', expanded: false }
  // ];

  // filteredData: any[]=[];

  // constructor() { }

  // ngOnInit() {
  //   this.filterData('category1');
  // }

  // filterData(category: string) {
  //   this.filteredData = this.data.filter(item => item.category === category);
  // }

  // toggle(index: number) {
  //   this.filteredData[index].expanded = !this.filteredData[index].expanded;
  // }
