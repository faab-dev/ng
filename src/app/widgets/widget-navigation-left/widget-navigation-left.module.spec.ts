import { WidgetNavigationLeftModule } from './widget-navigation-left.module';

describe('WidgetNavigationLeftModule', () => {
  let widgetNavigationLeftModule: WidgetNavigationLeftModule;

  beforeEach(() => {
    widgetNavigationLeftModule = new WidgetNavigationLeftModule();
  });

  it('should create an instance', () => {
    expect(widgetNavigationLeftModule).toBeTruthy();
  });
});
