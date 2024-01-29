import * as someDep from "some-dep";

export async function main() {
  // someDep.useNone();
  someDep.useOptionalPeer();
}

main();
