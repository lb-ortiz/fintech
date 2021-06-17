import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SignUpComponent
      ],
    }).compileComponents();
  }));

  it('deve renderizar a home', () => {
    const fixture = TestBed.createComponent(SignUpComponent);
    const home = fixture.componentInstance;
    expect(home).toBeTruthy();
  });

  it('renderiza o titulo', () => {
    const fixture = TestBed.createComponent(SignUpComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.logo-column span').textContent).toContain('Bem vindo a fintech!');
  });
});
