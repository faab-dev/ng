import { HotelsRoutingModule } from './hotels-routing.module';

describe('HotelsRoutingModule', () => {
  let hotelsRoutingModule: HotelsRoutingModule;

  beforeEach(() => {
    hotelsRoutingModule = new HotelsRoutingModule();
  });

  it('should create an instance', () => {
    expect(hotelsRoutingModule).toBeTruthy();
  });
});
