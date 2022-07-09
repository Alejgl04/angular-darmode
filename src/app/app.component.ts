import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ThemeService } from './services/theme.service';

import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkMode!: boolean;
  title = 'darkApp';
  showFiller = false;


  constructor( private themeService: ThemeService,public dialog: MatDialog ){
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  ngOnInit(): void {

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe( result => {
      console.log( 'Result', result );
    });
  }
  
  toggleDarkMode(): void {

    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode ? this.themeService.updateTheme('light-mode') : this.themeService.updateTheme('dark-mode');
  }
}
