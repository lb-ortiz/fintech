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

  it('deve renderizar a tela de cadastro', () => {
    const fixture = TestBed.createComponent(SignUpComponent);
    const home = fixture.componentInstance;
    expect(home).toBeTruthy();
  });
});
