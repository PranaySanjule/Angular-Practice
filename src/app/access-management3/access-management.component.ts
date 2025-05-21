import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

// interface UserRole {
//   name: string;
//   assignedRoles: string[];
//   additionalRoles: string[];
//   selected: boolean;
//   roleControl: FormControl;
//   roleDropdownOpen: boolean;
// }

interface RoleItem {
  role: string;
  isAdditional: boolean;
}

interface UserRole {
  name: string;
  assignedRoles: RoleItem[];
  additionalRoleControl: FormControl;
  selected: boolean;
  roleControl: FormControl;
  roleDropdownOpen: boolean;
}


@Component({
  selector: 'app-access-management',
  imports: [ CommonModule, FormsModule, MatTableModule, MatSelectModule, ReactiveFormsModule, MatCheckboxModule, MatChipsModule
    ,MatButtonModule, MatIconModule, MatFormFieldModule, MatIconModule
  ],
  templateUrl: './access-management.component.html',
  styleUrl: './access-management.component.css'
})
export class AccessManagementComponent {
  availableRoles = ['Managing Director', 'Account Lead', 'CXL', 'SL'];

  // users: UserRole[] = [
  //   {
  //     name: 'Himanshu Sharma',
  //     assignedRoles: ['Managing Director'],
  //     additionalRoles: [],
  //     selected: false,
  //     roleControl: new FormControl([]),
  //     roleDropdownOpen: false
  //   },
  //   {
  //     name: 'Pratik Verma',
  //     assignedRoles: ['Account Lead', 'SL'],
  //     additionalRoles: [],
  //     selected: false,
  //     roleControl: new FormControl([]),
  //     roleDropdownOpen: false
  //   },
  //   {
  //     name: 'Rohan Kumar',
  //     assignedRoles: ['CXL', 'Account Lead', 'SL'],
  //     additionalRoles: [],
  //     selected: false,
  //     roleControl: new FormControl([]),
  //     roleDropdownOpen: false
  //   },
  //   {
  //     name: 'Aarya Jain',
  //     assignedRoles: ['SL'],
  //     additionalRoles: [],
  //     selected: false,
  //     roleControl: new FormControl([]),
  //     roleDropdownOpen: false
  //   },
  //   {
  //     name: 'Kunal Singh',
  //     assignedRoles: ['Account Lead', 'CXL'],
  //     additionalRoles: ['Managing Director', 'CXL'],
  //     selected: false,
  //     roleControl: new FormControl(['Managing Director', 'CXL']),
  //     roleDropdownOpen: false
  //   }
  // ];

  users: UserRole[] = [
    {
      name: 'Himanshu Sharma',
      assignedRoles: [
        { role: 'Managing Director', isAdditional: false }
      ],
      additionalRoleControl: new FormControl(),
      selected: false,
      roleControl: new FormControl([]),
      roleDropdownOpen: false
    },
    {
      name: 'Pratik Verma',
      assignedRoles: [
        { role: 'Account Lead', isAdditional: false },
        { role: 'SL', isAdditional: false }
      ],
      additionalRoleControl: new FormControl(),
      selected: false,
      roleControl: new FormControl([]),
      roleDropdownOpen: false
    },
    {
      name: 'Rohan Kumar',
      assignedRoles: [
        { role: 'CXL', isAdditional: false },
        { role: 'Account Lead', isAdditional: false },
        { role: 'SL', isAdditional: false }
      ],
      additionalRoleControl: new FormControl(),
      selected: false,
      roleControl: new FormControl([]),
      roleDropdownOpen: false
    },
    {
      name: 'Aarya Jain',
      assignedRoles: [
        { role: 'SL', isAdditional: false }
      ],
      additionalRoleControl: new FormControl(),
      selected: false,
      roleControl: new FormControl([]),
      roleDropdownOpen: false
    },
    {
      name: 'Kunal Singh',
      assignedRoles: [
        { role: 'Account Lead', isAdditional: false },
        { role: 'CXL', isAdditional: false },
      ],
      additionalRoleControl: new FormControl(),
      selected: false,
      roleControl: new FormControl([]),
      roleDropdownOpen: false
    }
  ];


  addRole(user: UserRole, selectedRole: string): void {
    if (!user.assignedRoles.find(r => r.role === selectedRole)) {
      user.assignedRoles.push({ role: selectedRole, isAdditional: true });
      user.additionalRoleControl.setValue(null);
    }
  }

  getAvailableRoles(user: UserRole): string[] {
    const assigned = user.assignedRoles.map(r => r.role);
    const selectedAdditional = user.roleControl.value || [];
    return this.availableRoles.filter(role => !assigned.includes(role) && !selectedAdditional.includes(role));
  }

  onSelectRole(user: UserRole): void {
    const selectedRoles = user.roleControl.value || [];

    selectedRoles.forEach((role: string) => {
      if (!user.assignedRoles.find(r => r.role === role)) {
        user.assignedRoles.push({ role: role, isAdditional: true });
      }
    });

    user.roleControl.setValue([]); // Clear dropdown selection
  }

  removeAssignedRole(user: UserRole, item: RoleItem): void {
    if (item.isAdditional) {
      const index = user.assignedRoles.findIndex(r => r.role === item.role && r.isAdditional);
      if (index >= 0) {
        user.assignedRoles.splice(index, 1);
      }
    }
  }

  // addRole(user: UserRole, selectedRole: string): void {
  //   if (!user.assignedRoles.find(r => r.role === selectedRole)) {
  //     user.assignedRoles.push({ role: selectedRole, isAdditional: true });
  //     user.additionalRoleControl.setValue(null);
  //   }
  // }

  // getAvailableRoles(user: UserRole): string[] {
  //   const assigned = user.assignedRoles.map(r => r.role);
  //   return this.availableRoles.filter(role => !assigned.includes(role));
  // }

  // onSelectRole(user: UserRole): void {
  //   const selectedRoles = user.roleControl.value || [];

  //   selectedRoles.forEach((role: string) => {
  //     if (!user.assignedRoles.find(r => r.role === role)) {
  //       user.assignedRoles.push({ role: role, isAdditional: true });
  //     }
  //   });

  //   user.roleControl.setValue([]); // Clear dropdown selection
  // }

  // removeAssignedRole(user: UserRole, item: RoleItem): void {
  //   if (item.isAdditional) {
  //     const index = user.assignedRoles.findIndex(r => r.role === item.role && r.isAdditional);
  //     if (index >= 0) {
  //       user.assignedRoles.splice(index, 1);
  //       const currentAdditional = user.roleControl.value || [];
  //       user.roleControl.setValue([...currentAdditional, item.role]);
  //       user.additionalRoleControl.setValue(null);
  //     }
  //   }
  // }

  toggleDropdown(user: UserRole, open: boolean): void {
    user.roleDropdownOpen = open;
  }

  submit(): void {
    console.log('Submitted Users:', this.users);
  }


  masterSelected: boolean = false;

  toggleSelectAll(checked: boolean): void {
    this.users.forEach(user => user.selected = checked);
  }

  checkIfAllSelected(): void {
  this.masterSelected = this.users.every(user => user.selected);
}


}