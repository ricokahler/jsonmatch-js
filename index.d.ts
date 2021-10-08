/**
 * Performs `jsonmatch.Match('path', {"some": "obj"}, "value")`
 *
 * @param path the JSONMatch expression as a string
 * @param object the object to perform the operation on
 * @param valueToSet the value to to set
 */
export function JSONMatch(
  path: string,
  object: unknown,
  valueToSet: unknown,
): unknown;
