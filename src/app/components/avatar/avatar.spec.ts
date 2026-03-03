import { ComponentFixture, TestBed } from '@angular/core/testing';

// Cambiamos 'Avatar' por 'AvatarComponent'
import { AvatarComponent } from './avatar'; 

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Aquí también debe decir AvatarComponent
      imports: [AvatarComponent] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});