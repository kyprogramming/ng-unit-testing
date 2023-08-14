import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AuthorComponent } from './author.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthorService } from 'src/app/services/author.service';
import { Observable, of } from 'rxjs';

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;
  let service: AuthorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorComponent],
      imports: [HttpClientTestingModule],
      providers: [AuthorService]
    });
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthorService);
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should fetch data from author service and display it", fakeAsync(() => {
    // arrange 
    const authorData = [{ name: 'test author 1' }, { name: 'test author 2' }]
    spyOn(service, 'getAuthors').and.returnValue(of(authorData));

    // action
    fixture.detectChanges();
    tick();
    // assert 
    fixture.detectChanges();
    const listItems = fixture.nativeElement.querySelectorAll('li');
    expect(listItems.length).toBe(authorData.length);
    expect(listItems[0].textContent).toContain(authorData[0].name);
    expect(listItems[1].textContent).toContain(authorData[1].name);
  }));



  it("should handle service error gracefully", fakeAsync(() => {
    // arrange 
    spyOn(service, 'getAuthors').and.returnValue(
      new Observable((observer) => { observer.error(new Error("Error Occurred")) })
    );

    // action
    fixture.detectChanges();
    tick();
    // assert 
    fixture.detectChanges();
    const errorElement = fixture.nativeElement.querySelector('.error-message');
    expect(errorElement.textContent).toContain('Service Error');
  }));

});
