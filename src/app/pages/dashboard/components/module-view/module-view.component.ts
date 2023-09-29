import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IModule } from 'src/app/core/interfaces/IModule.interface';
import { ContentBlockType, IContentBlock } from 'src/shared-interfaces/IContentBlock.interface';

/**
 * Component that hosts the dynamic content sent from the backend, this content can be data forms, filter forms, action buttons, tables, etc.
 */
@Component({
  selector: 'app-module-view',
  templateUrl: './module-view.component.html',
  styleUrls: ['./module-view.component.scss']
})
export class ModuleViewComponent implements OnInit {
  public module!: IModule; // passed from the route definition ({ path: module.route, component: DashboardComponent, data: { module } })
  public moduleContent!: IContentBlock[]; // response from API that contains the content for this module (tailored for user), it comes from the moduleViewResolver function
  public ContentBlockType = ContentBlockType;

  constructor(private route: ActivatedRoute) { }

  /**
   * Capture data passed from the route definition (the "data" property) and resolver
   */
  ngOnInit(): void {
    this.route.data
      .subscribe(data => {
        this.module = data['module'];
        this.moduleContent = data['contentBlocks']

        /*----- update the overall dashboard view (pagetitle, breadcrumb, side-menu) ------*/
        // ...
        /*---------------------------------------------------------------------------------*/
      });
  }
}
