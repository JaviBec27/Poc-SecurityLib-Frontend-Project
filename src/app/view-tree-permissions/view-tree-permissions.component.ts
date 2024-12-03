import { Component, OnInit } from '@angular/core';
import { JwtDecodeService, AuthService, StorageService } from 'security-lib';
import { tokenInfo } from 'security-lib/lib/security-lib/models/tokenModels';


@Component({
  selector: 'app-view-tree-permissions',
  templateUrl: './view-tree-permissions.component.html',
  styleUrl: './view-tree-permissions.component.css'
})
export class ViewTreePermissionsComponent implements OnInit {


  token: string = '';

  formattedTokenData: tokenInfo | null = null;
  flagsString: string = "";

  constructor(private jwtService: JwtDecodeService, private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {

    if (this.storageService.getLocalStorage('token')) {
      this.token = this.storageService.getLocalStorage('token')!;
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

    this.storageService.setLocalStorage('token', this.token);

    if (this.formattedTokenData?.permissionsTree) {
      this.authService.savePermissionsTree(this.formattedTokenData?.permissionsTree);
      return;
    }

    console.error('ocurrió un error asignando los permisos');


  }
}
