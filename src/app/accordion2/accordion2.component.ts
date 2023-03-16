import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion2',
  templateUrl: './accordion2.component.html',
  styleUrls: ['./accordion2.component.css']
})

 
  export class Accordion2Component  {
    menuItems = [
      {
        title: 'Dashboard',
        roles: ['admin', 'user'],
        subitems: [
          { title: 'Overview', link: '/dashboard/overview' },
          { title: 'Analytics', link: '/dashboard/analytics' },
          { title: 'Reports', link: '/dashboard/reports' }
        ],
        expanded: false
      },
      {
        title: 'Customers',
        roles: ['admin'],
        subitems: [
          { title: 'List', link: '/customers/list' },
          { title: 'Add', link: '/customers/add' }
        ],
        expanded: false
      },
      {
        title: 'Settings',
        roles: ['admin'],
        subitems: [
          { title: 'Profile', link: '/settings/profile' },
          { title: 'Account', link: '/settings/account' },
          { title: 'Notifications', link: '/settings/notifications' }
        ],
        expanded: false
      }
    ];
  
    userRoles = ['admin'];
  
    selectSubitem(subitem: any) {
      console.log(`Selected subitem: ${subitem.title} (${subitem.link})`);
    }
  }

  
  
  
  
  
  