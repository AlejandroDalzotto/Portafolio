import type { MDXComponents } from "mdx/types"
import { Code, RoundedImage } from "@/components"

const components: MDXComponents = {
  Image: RoundedImage,
  code: Code,
}

export default components