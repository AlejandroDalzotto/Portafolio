export const sleep = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const getTitleFromPath = (path: string) => {
  if (path === "/") return "home";
  
  // Split the path by slashes and filter out empty parts
  const parts = path.split("/").filter(Boolean);
  
  // Get the last part of the path
  const lastSegment = parts.pop() || "";
  
  // Replace hyphens with spaces and return the formatted title
  return lastSegment.replace(/-/g, " ");
}