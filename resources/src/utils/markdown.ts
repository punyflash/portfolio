import rehypeMath from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import rehypePrism from 'rehype-prism'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import yaml from 'js-yaml'
import { unified } from 'unified'

import '@/css/prism-daisyui.css'
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-bash"
import "prism-svelte"

import 'katex/dist/katex.min.css'

if (!import.meta.env.SSR) {
    import('katex/dist/contrib/copy-tex.mjs');
}

export const safe = unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(() => (tree, file) => {
        const node = tree.children.find((node) => node.type === 'yaml')
        node && (file.data.meta = yaml.load(node.value))
    })
    .use(remarkMath)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeMath)
    .use(rehypePrism)
    .use(rehypeStringify, { allowDangerousHtml: true })

export const unsafe = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
