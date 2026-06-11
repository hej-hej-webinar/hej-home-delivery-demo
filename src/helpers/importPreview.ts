export function previewImportPattern(pattern: string): Promise<string> {
  const preview = pattern
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
    .join("\n");

  return Promise.resolve(preview);
}
