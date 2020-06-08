export class LayoutConfig {
  public defaults = {
    layout: 'default',
    mode: 'full-width', // 'boxed', 'full-width', 'framed'
    theme: 'dark',
    themeColor: '',
    navigationStyle: 'folded', // 'default', 'folded', 'drawer'
    navigationFixed: false, // true, false
    activeNavDrawer: false, // true, false
    headerFixed: true, // true, false,
    customScrollbars: true
  };

  public get configs() {
    return this.defaults;
  }
}
