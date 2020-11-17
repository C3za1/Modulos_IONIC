import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonSegmentPage } from './ion-segment.page';

describe('IonSegmentPage', () => {
  let component: IonSegmentPage;
  let fixture: ComponentFixture<IonSegmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonSegmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonSegmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
