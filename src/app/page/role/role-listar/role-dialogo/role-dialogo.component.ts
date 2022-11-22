import { RoleService } from 'src/app/service/role.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-dialogo',
  templateUrl: './role-dialogo.component.html',
  styleUrls: ['./role-dialogo.component.css']
})
export class RoleDialogoComponent implements OnInit {

  constructor(private roleService:RoleService,private dialogRef:MatDialogRef<RoleDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado:boolean){
    this.roleService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
    

}
