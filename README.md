# PHD Presntations
- June 2026: [Young Topologist Meeting](https://www.math.ku.dk/english/calendar/events/ytm26/).

---

### Instalation instructions
1. Follow instructions at [revealjs.com](https://revealjs.com/installation/) to install base reveal with npm and node.

2. At ```vite.config.ts``` add

```
root: '../',

server: {
		open: ytm2026/index.html'
	},
    
    plugins: [
		{
			name: 'watch-md',
			handleHotUpdate({file, server}) {
				if (file.endsWith('.md')) {
					server.ws.send({ type: 'full-reload'})
				}
			},
		}
	],
```