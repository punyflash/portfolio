import rehypeMath from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import rehypeStarryNight from 'rehype-starry-night'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import yaml from 'js-yaml'
import { unified } from 'unified'
import svelte from '@wooorm/starry-night/source.svelte'
import { common } from '@wooorm/starry-night'
import 'katex/dist/katex.min.css'
import '@wooorm/starry-night/style/both'
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
        .use(rehypeStarryNight, { grammars: [svelte, ...common] })
        .use(rehypeStringify, { allowDangerousHtml: true })
        .process(data)
}

export function unsafe(data: string) {
    return unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeMath)
        .use(rehypeStarryNight, { grammars: [svelte, ...common] })
        .use(rehypeStringify)
        .process(data)
}
