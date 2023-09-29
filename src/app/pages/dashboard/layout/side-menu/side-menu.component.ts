import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import $ from 'jquery';
import PerfectScrollbar from 'perfect-scrollbar';
import { DashboardModulesService } from 'src/app/core/services/dashboard-modules.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html'
})
export class SideMenuComponent implements AfterViewInit {
  @ViewChild('sideMenu') sideMenu: ElementRef | undefined;

  constructor(public dashboardModulesService: DashboardModulesService) { }

  /**
   * Customize view behaviour (custom scrollbar, accordion list items, menu bar view toggling...).
   * Note: this is all preset from the template (uses jQuery), you could also replicate this behaviour the Angular way.
   */
  ngAfterViewInit() {
    // add a good looking scrollbar to this element (sideMenu)
    PerfectScrollbar.initialize(this.sideMenu?.nativeElement)

    // showing sub navigation to nav with sub nav.
    $('.with-sub.active + .nav-sub').slideDown();

    // showing sub menu while hiding others
    $('.with-sub').on('click', function(e) {
      e.preventDefault();
      var nextElem = $(this).next();
      if(!nextElem.is(':visible')) {
        $('.nav-sub').slideUp();
      }
      nextElem.slideToggle();
    });

    // hide left menu bar
    $('#navicon').on('click', function(e) {
      e.preventDefault();
      $('body').toggleClass('hide-left');
    });

    // push/hide left menu bar in mobile
    $('#naviconMobile').on('click', function(e) {
      e.preventDefault();
      $('body').toggleClass('show-left');
    });
  }
}
