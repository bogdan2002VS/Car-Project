/** Strip spaces/dashes and upper-case, so "B61P-15-171" matches "b61p15171". */
export function normalizeOem(code: string): string {
  return code.replace(/[\s-]+/g, '').toUpperCase()
}

/** Canonical display formatting for an OEM code. */
export function formatOem(code: string): string {
  return code.trim().toUpperCase()
}
