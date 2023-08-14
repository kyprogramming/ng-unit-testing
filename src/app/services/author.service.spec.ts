import { TestBed } from '@angular/core/testing';

import { AuthorService } from './author.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AuthorService', () => {
  let service: AuthorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAuthors should return author list', async () => {
    const apiUrl: string = 'http://localhost:4001/author';
    const expectedData: any = [{ "_id": "2342", "name": "JK Rolling", "email": "jkrolling@gmai.com" }, { "_id": "343", "name": "JK Rolling", "email": "jkrolling@gmai.com" }];
    
    await service.getAuthors().subscribe(
      data => expect(data).toEqual(expectedData)
      );
      
    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedData);

  });

  it('getAuthors should handle error while fetching data', async () => {
    const apiUrl: string = 'http://localhost:4001/author';
    const errorMessage = "Error occurred";
    
    await service.getAuthors().subscribe(
      () => fail('expected an error'),
      (error) => expect(error).toContain(errorMessage)
    );
    
    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');
    req.error(new ErrorEvent('Error occurred'));

  });



});
