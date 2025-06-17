
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
    'index.csr.html': {size: 6824, hash: '45ba443cc1e7766589da0e451e565eacab54ea39dccc323bd2e16dfcac877295', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2651, hash: 'b5ea04824471f3301c1818684e9246e2b74eac76f6cdd1f849bfc26365e1b9cb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29026, hash: 'ecc8e1522b235517c81671f2fc4b4624aa5f40c4837ea0666feea26dd0f46ab7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TWQK2HV3.css': {size: 231019, hash: '1ZszkYxtEug', text: () => import('./assets-chunks/styles-TWQK2HV3_css.mjs').then(m => m.default)}
  },
};
