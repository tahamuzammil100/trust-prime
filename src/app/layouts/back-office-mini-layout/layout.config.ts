export class LayoutConfig {
  public defaults = {
    layout: 'back-office-mini',
    mode: 'full-width', // 'boxed', 'full-width', 'framed'
    theme: '',
    themeColor: '',
    navigationStyle: 'folded', // 'default', 'folded', 'drawer'
    navigationFixed: true, // true, false
    activeNavDrawer: false, // true, false
    headerFixed: false, // true, false,
    customScrollbars: true
  };

  public get configs() {
    return this.defaults;
  }
}
