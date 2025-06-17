
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6814, hash: '56a49029bf7dc91e22d13a060ea2743faeeb3c80db407a2166aa2f1b0a345a2d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2641, hash: 'f4afbe656021662cb51309279041d829db08a28ff09e365a33e9e7b588235f9a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29016, hash: 'f77c4a7bfd6688aaaede7909d72837bc3cedf82a2b8d31e4eb7b20e68b005e95', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TWQK2HV3.css': {size: 231019, hash: '1ZszkYxtEug', text: () => import('./assets-chunks/styles-TWQK2HV3_css.mjs').then(m => m.default)}
  },
};
