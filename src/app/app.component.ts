import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 arr = [1, 1, 2, 3, 5, 8, 13];

 obj = [
   {
     title: 'Post 1', author: 'Dima', comments: [
       {name: 'Max', text: 'lorem 1'},
       {name: 'Max', text: 'lorem 2'},
       {name: 'Max', text: 'lorem 3'}
     ]
   },
   {
     title: 'Post 2', author: 'Kata', comments: [
       {name: 'Pet', text: 'lorem 1'},
       {name: 'Pet', text: 'lorem 2'},
       {name: 'Pet', text: 'lorem 3'}
     ]
   }
 ];
}
