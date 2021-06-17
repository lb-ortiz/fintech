import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HeaderComponent
      ],
    }).compileComponents();
  }));

  it('deve renderizar o header', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const home = fixture.componentInstance;
    expect(home).toBeTruthy();
  });

  it(`deve ter o titulo fintech`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const home = fixture.componentInstance;
    expect(home.title).toEqual('fintech');
  });

  it('renderiza o titulo', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.logo-column span').textContent).toContain('Bem vindo a fintech!');
  });
});
