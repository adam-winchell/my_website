export const manifest = {
	appDir: "_app",
	assets: new Set(["down.svg","email.svg","favicon.png","github.svg","google.svg","linkedin.svg","menu.svg","mortarboard.svg","profile.png","up.svg"]),
	_: {
		mime: {".svg":"image/svg+xml",".png":"image/png"},
		entry: {"file":"start-d4964488.js","js":["start-d4964488.js","chunks/vendor-d63db0a2.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/publications\/?$/,
				params: null,
				path: "/publications",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/photos\/?$/,
				params: null,
				path: "/photos",
				a: [0,4],
				b: [1]
			}
		]
	}
};
