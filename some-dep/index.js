export async function useNone() {
}

export async function useOptionalPeer() {
  console.log(await import("no-such-lib"));
}

// this leads to a warning regardless of usage because of `resolveId`
// export async function useNodeFs() {
//   console.log(await import("node:fs"))
// }
