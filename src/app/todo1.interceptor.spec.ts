import { TestBed } from '@angular/core/testing';

import { Todo1Interceptor } from './todo1.interceptor';

describe('Todo1Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Todo1Interceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: Todo1Interceptor = TestBed.inject(Todo1Interceptor);
    expect(interceptor).toBeTruthy();
  });
});
