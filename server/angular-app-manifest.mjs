
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6824, hash: '8dde478e14d2f71999b5711e7e51b39b39591294eb906a580f9baa69e98dc64c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2651, hash: '4051747be454dedc880b42c11e19f0e2a80bd9733dbf03c4fbb9cfae91672198', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29024, hash: '74dad2fcd3f511bd2560fba320bc94995f4be0e354e1ee40fdd5c56265218292', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TWQK2HV3.css': {size: 231019, hash: '1ZszkYxtEug', text: () => import('./assets-chunks/styles-TWQK2HV3_css.mjs').then(m => m.default)}
  },
};
