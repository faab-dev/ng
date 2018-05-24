import { WidgetGridListModule } from './widget-grid-list.module';

describe('WidgetGridListModule', () => {
  let widgetGridListModule: WidgetGridListModule;

  beforeEach(() => {
    widgetGridListModule = new WidgetGridListModule();
  });

  it('should create an instance', () => {
    expect(widgetGridListModule).toBeTruthy();
  });
});
