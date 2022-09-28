# noosmilk

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# publish on gh-pages
- https://dfaveris.medium.com/publier-une-application-vuejs-sur-github-ee7662c94667
```
npm run build
git add dist -f && git commit -m "Initial dist subtree commit"


```
# y-websocket
- https://glitch.com/edit/#!/flame-long-base

# y-leveldb persistance
- add    "start": "YPERSISTENCE=./.data node ./bin/server.js", in package.json
and dependency     "y-leveldb": "0.1.1"
-> https://glitch.com/edit/#!/yjs-leveldb
-> https://yjs-leveldb.glitch.me/

```
Persisting documents to "./.data"

running at 'localhost' on port 3000
```
