import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private permissionsTree: any | null;

  constructor() {
    // Ejemplo de permisos del usuario, podría venir desde un token o API
    this.permissionsTree = null;
  }


  setPermissionsFromlocalStorage() {
    this.permissionsTree = this.getPermissionFromlocalStorage();
  }

  private getPermissionFromlocalStorage(): string | null {
    const permissionsTree = localStorage.getItem('permissionsTree');
    if (permissionsTree) {
      return JSON.parse(permissionsTree);
    }
    return null;
  }

  private defaultOptions: any = {
    "denyAccess": true,
    "allowCreate": false,
    "allowRead": false,
    "allowUpdate": false,
    "allowDelete": false,
    "allowExport": false,
    "allowPrint": false
  }

  /*  private mispermisos: any = {
     '1.1': {
       "denyAccess": true,
       "allowCreate": false,
       "allowRead": false,
       "allowUpdate": false,
       "allowDelete": false,
       "allowExport": false,
       "allowPrint": false
     },
     '1.2': {
       "denyAccess": true,
       "allowCreate": false,
       "allowRead": false,
       "allowUpdate": false,
       "allowDelete": false,
       "allowExport": false,
       "allowPrint": false
     },
     '2.3.*': {
       "denyAccess": false,
       "allowCreate": true,
       "allowRead": true,
       "allowUpdate": false,
       "allowDelete": false,
       "allowExport": false,
       "allowPrint": false
     },
     '3': {
       "denyAccess": false,
       "allowCreate": false,
       "allowRead": true,
       "allowUpdate": false,
       "allowDelete": false,
       "allowExport": true,
       "allowPrint": true
     }

   } */

  hasPermission(permission: string): boolean {
    //Validación específica del permiso
    if (this.permissionsTree[permission])
      return true;

    const parts = permission.split('.');
    for (let i = parts.length; i > 0; i--) {
      const wildCardPermission = parts.slice(0, i).join('.');
      if (this.permissionsTree[wildCardPermission + '.*']) {
        return true;
      }
    }
    return false;
  }

  getActions(permission: string): any {
    //Verificar permiso específico
    if (this.permissionsTree[permission])
      return this.permissionsTree[permission];

    const parts = permission.split('.');
    for (let i = parts.length; i > 0; i--) {
      const wildCardPermission = parts.slice(0, i).join('.') + '.*';
      if (this.permissionsTree[wildCardPermission]) {
        return this.permissionsTree[wildCardPermission];
      }
    }
    return this.defaultOptions;
  }
}
