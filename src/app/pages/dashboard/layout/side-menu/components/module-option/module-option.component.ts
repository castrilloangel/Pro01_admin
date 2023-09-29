import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IModule } from 'src/app/core/interfaces/IModule.interface';
import { DashboardModulesService } from 'src/app/core/services/dashboard-modules.service';
import { EncryptionService } from 'src/app/core/services/encryption.service';

@Component({
  selector: 'app-module-option',
  templateUrl: './module-option.component.html',
  styleUrls: ['./module-option.component.scss']
})
export class ModuleOptionComponent implements OnInit {
  @Input() module!: IModule;
  /**
   * represents the level of this component in the menu context (top level is 1, submenu is 2, and so on)
   */
  @Input() layer!: number;

  constructor(
    private router: Router,
    private encryptionService: EncryptionService,
    public dashboardModulesService: DashboardModulesService
  ) { }

  ngOnInit(): void {
    if (this.layer === undefined) {
      this.layer = 1;
    }
  }

  public goToModulesCardMenu(): void {
    const module = this.encryptionService.encryptRouteParameter(this.module);
    this.router.navigate(['/dashboard/modules'], { queryParams: { module } });
  }
}
