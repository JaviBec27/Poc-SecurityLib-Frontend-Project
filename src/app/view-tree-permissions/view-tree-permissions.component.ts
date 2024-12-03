import { Component, OnInit } from '@angular/core';
import { tokenInfo, JwtService } from 'security-lib';
import { AuthService } from '../+shared/services/auth/auth.service';

@Component({
  selector: 'app-view-tree-permissions',
  templateUrl: './view-tree-permissions.component.html',
  styleUrl: './view-tree-permissions.component.css'
})
export class ViewTreePermissionsComponent implements OnInit {


  token: string = '';

  formattedTokenData: tokenInfo | null = null;
  flagsString: string = "";

  constructor(private jwtService: JwtService, private authService:AuthService) { }

  ngOnInit(): void {

    if(localStorage.getItem('token')) {
      this.token = localStorage.getItem('token')!;
    }
  }

  decodeToken() {
    try {
      console.log('token', this.token);
      this.formattedTokenData = this.jwtService.formatTokenData(this.token);
      console.log('permissionsTree', this.formattedTokenData);

    } catch (error) {
      console.error('Error decoding token:', error);
      this.formattedTokenData = null;
    }
  }

  setTokenAsPermissionTree() {
    console.log('Se establece un nuevo token y permissionsTree en el localStorage');

    localStorage.setItem('token', this.token);
    localStorage.setItem('permissionsTree', JSON.stringify(this.formattedTokenData?.permissionsTree));
    this.authService.setPermissionsFromlocalStorage();
  }
}
