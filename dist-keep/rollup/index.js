import noSuchLib from 'no-such-lib';

// this will end up as empty object likely due to
// https://github.com/vitejs/vite/blob/3c9cab6912dc627a22abba4c3fd6074166f5cc4c/packages/vite/src/node/plugins/resolve.ts#L458-L460

async function someDep() {
  console.log(noSuchLib);
}

async function main() {
  someDep();
}

main();

export { main };
