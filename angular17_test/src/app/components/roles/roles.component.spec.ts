import { ComponentFixture, TestBed } from '@angular/core/testing';
import { rolesComponent } from './roles.component';
import { CommonModule } from '@angular/common';

describe('rolescomponent', () => {
  let component: rolesComponent;
  let fixture: ComponentFixture<rolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [rolesComponent,CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(rolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
