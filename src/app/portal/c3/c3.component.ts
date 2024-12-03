import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../+shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrl: './c3.component.css'
})
export class C3Component implements OnInit {



  /**
   *
   */
  constructor(private authService: AuthService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const permission = this.route.snapshot.data['permission'];
    this.actions = this.authService.getActions(permission);
  }


  actions: any | null = {
    denyAccess: false,
    allowCreate: false,
    allowRead: true,
    allowUpdate: true,
    allowDelete: false,
    allowExport: false,
    allowPrint: true
  };

  onCreate() {
    console.log('Create action');
  }

  onRead() {
    console.log('Read action');
  }

  onUpdate() {
    console.log('Update action');
  }

  onDelete() {
    console.log('Delete action');
  }

  onExport() {
    console.log('Export action');
  }

  onPrint() {
    console.log('Print action');
  }}
