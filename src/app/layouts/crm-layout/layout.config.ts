export class LayoutConfig {
  public defaults = {
    layout: 'crm',
    mode: 'full-width', // 'boxed', 'full-width', 'framed'
    theme: 'light',
    themeColor: '',
    navigationStyle: 'default', // 'default', 'folded', 'drawer'
    navigationFixed: true, // true, false
    activeNavDrawer: false, // true, false
    headerFixed: false, // true, false,
    customScrollbars: true
  };

  public get configs() {
    return this.defaults;
  }
}
