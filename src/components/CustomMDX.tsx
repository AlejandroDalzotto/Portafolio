import Image, { type ImageProps } from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import components from './mdx-components'

export function RoundedImage({ alt, ...props }: ImageProps) {
  return <Image alt={alt} className="rounded-lg" {...props} />
}

export function Code({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  const codeHTML = highlight(children!.toString())
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

export function CustomMDX({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={{ ...components }}
    />
  )
}