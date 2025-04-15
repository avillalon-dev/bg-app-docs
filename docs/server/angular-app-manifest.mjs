
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/bg-app-docs/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/bg-app-docs"
  },
  {
    "renderMode": 2,
    "route": "/bg-app-docs/information"
  },
  {
    "renderMode": 2,
    "route": "/bg-app-docs/recipes"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 68187, hash: '94eb8494336534b851f2c71f113817d1dbba1cabd2084a5b234ffdcbb5b9ee9a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 32752, hash: '2b9ccf07c74e263f6a22b6c2d49e48124439bee89ca9c789bc31d8a84d4a0f37', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'recipes/index.html': {size: 98358, hash: '19eea86331f86e59f1342ebb6841085e663ae1c45dec3e5ced9de1ce814f4653', text: () => import('./assets-chunks/recipes_index_html.mjs').then(m => m.default)},
    'index.html': {size: 140548, hash: '0d9e9fc444807d584cce1995f58c16ce97ed4b63a9ec01aa39e4e49f0953a0fb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'information/index.html': {size: 118045, hash: '7159e9404f5c8954f49c6c5ef7b9ae3eb57674e6b645f025f020a24d59709c79', text: () => import('./assets-chunks/information_index_html.mjs').then(m => m.default)},
    'styles-JGYF3REH.css': {size: 81741, hash: '3xgVodLjAqk', text: () => import('./assets-chunks/styles-JGYF3REH_css.mjs').then(m => m.default)}
  },
};
