import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LoginComponent
      ],
    }).compileComponents();
  }));

  it('deve renderizar a home', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const home = fixture.componentInstance;
    expect(home).toBeTruthy();
  });

  it(`deve ter o titulo fintech`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const home = fixture.componentInstance;
    expect(home.title).toEqual('fintech');
  });

  it('renderiza o titulo', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.logo-column span').textContent).toContain('Bem vindo a fintech!');
  });
});
