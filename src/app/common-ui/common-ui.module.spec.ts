import { CommonUiModule } from './common-ui.module';

describe('CommonUiModule', () => {
  let commonUiModule: CommonUiModule;

  beforeEach(() => {
    commonUiModule = new CommonUiModule();
  });

  it('should create an instance', () => {
    expect(commonUiModule).toBeTruthy();
  });
});
