import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MensagemPage } from './mensagem.page';

describe('MensagemPage', () => {
  let component: MensagemPage;
  let fixture: ComponentFixture<MensagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MensagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
