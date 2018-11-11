import { async, TestBed } from '@angular/core/testing';
import { AgolApiModule } from './agol-api.module';

describe('AgolApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AgolApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AgolApiModule).toBeDefined();
  });
});
