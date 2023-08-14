import { ReversePipe } from './reverse.pipe';


describe('Reverse Pipe Testing' , ()=>{
  
  it('create an instance' , ()=>{
    // arrange
    
    // act
    const pipe = new ReversePipe();
    // assert
    expect(pipe).toBeTruthy();
  })

  it('should reverse the string' , ()=>{
     // arrange
    const data = 'hello';
    // act
    const pipe = new ReversePipe();
    const result =  pipe.transform(data);
    // assert
    expect(result).toBe('olleh');
  })

  it('should handle blank , null and undefined value' , ()=>{
     // arrange
     const data = '' || null || undefined;
     // act
     const pipe = new ReversePipe();
     const result =  pipe.transform(data);
     // assert
     expect(result).toBe('');
  })
})

