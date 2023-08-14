import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  constructor(private authorService:AuthorService){}
  ngOnInit(): void {
    this.getAuthors();
  }

  authors:any;
  errorMsg:any = '';

  getAuthors(){
    this.authorService.getAuthors().subscribe(
      (data) => this.authors = data,
      (err) => this.errorMsg  = 'Service Error'
    );
  }

}
