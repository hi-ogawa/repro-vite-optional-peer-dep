investigating https://github.com/vitejs/vite/discussions/15725

see `./dist-keep` for build output

```sh
#
# vite build (see "const noSuchLib = {}" in dist-keep/vite/assets/index-*.js)
#
$ pnpm build

> @ build /home/hiroshi/Downloads/repro-vite-preact-iso
> vite build

vite v5.0.12 building for production...
✓ 5 modules transformed.
dist/vite/index.html                0.36 kB │ gzip: 0.26 kB
dist/vite/assets/index-3D06x0db.js  1.41 kB │ gzip: 0.56 kB
✓ built in 60ms

#
# rollup
#
$ pnpm build-rollup

> @ build-rollup /home/hiroshi/Downloads/repro-vite-preact-iso
> rollup -c


./src/index.js → dist/rollup...
(!) Unresolved dependencies
https://rollupjs.org/troubleshooting/#warning-treating-module-as-external-dependency
no-such-lib (imported by "node_modules/.pnpm/file+some-dep/node_modules/some-dep/index.js")
created dist/rollup in 27ms

#
# vite dev
#
# during dev, an error surfaces on browser devtools, such as
#   some-dep.js?v=f92c2fa2:30 Uncaught Error: Could not resolve "no-such-lib" imported by "some-dep". Is it installed?
#       at optional-peer-dep:__vite-optional-peer-dep:no-such-lib:some-dep (some-dep.js?v=f92c2fa2:30:11)
#       at __require (some-dep.js?v=f92c2fa2:8:50)
#       at some-dep.js?v=f92c2fa2:35:34
pnpm dev
```
