
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/information"
  },
  {
    "renderMode": 2,
    "route": "/recipes"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 68175, hash: 'd3be879000354824fc76e4dadb61af8aa20d09ab4824cf5d241b048ee747f971', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 32740, hash: 'fb35069aac16bccda2a1da432a19890014c96deab6257cefc57d01e77c186378', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'information/index.html': {size: 117856, hash: '4ba55c86bb4e778f6fe8a6773bead885504467edbe56b20a8b1faf77dd48b0c8', text: () => import('./assets-chunks/information_index_html.mjs').then(m => m.default)},
    'index.html': {size: 140359, hash: 'fe3ac9398a3bb57fd2e9a3aaf6b3bb07fa3f19098f11d44f0c3a016f25d5bf56', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'recipes/index.html': {size: 98169, hash: '208527a6becaa337570faaa41637e2da6f21dade92815f299779f77300d4047b', text: () => import('./assets-chunks/recipes_index_html.mjs').then(m => m.default)},
    'styles-JGYF3REH.css': {size: 81741, hash: '3xgVodLjAqk', text: () => import('./assets-chunks/styles-JGYF3REH_css.mjs').then(m => m.default)}
  },
};
