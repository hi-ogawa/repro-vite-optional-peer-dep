investigating https://github.com/vitejs/vite/discussions/15725

see `./dist-keep` for build output

```sh
#
# vite build
#
# see `const __viteOptionalPeerDep_noSuchLib_someDep = {}`
# in dist/vite/assets/__vite-optional-peer-dep_no-such-lib_some-dep-iFilIger.js
#
$ pnpm build

> @ build /home/hiroshi/Downloads/repro-vite-preact-iso
> vite build

vite v5.0.12 building for production...
✓ 6 modules transformed.
dist/vite/index.html                                                        0.36 kB │ gzip: 0.26 kB
dist/vite/assets/__vite-optional-peer-dep_no-such-lib_some-dep-iFilIger.js  0.12 kB │ gzip: 0.10 kB
dist/vite/assets/index-Iv3ABt_f.js                                          3.37 kB │ gzip: 1.28 kB
✓ built in 78ms

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
created dist/rollup in 29ms

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
