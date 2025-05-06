import rehypeMath from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import yaml from 'js-yaml'
import { unified } from 'unified'
import 'katex/dist/katex.min.css'
import 'katex/dist/contrib/copy-tex'

export function safe(data: string) {
    return unified()
        .use(remarkParse)
        .use(remarkFrontmatter)
        .use(() => (tree, file) => {
            const node = tree.children.find((node) => node.type === 'yaml')

            if (!node) return

            file.data.meta = yaml.load(node.value)
        })
        .use(remarkMath)
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeMath)
        .use(rehypeStringify, { allowDangerousHtml: true })
        .processSync(data)
}

export function unsafe(data: string) {
    return unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeMath)
        .use(rehypeStringify)
        .processSync(data)
}
