import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\BlogController::show
 * @see app/Http/Controllers/BlogController.php:26
 * @route /blog/{post}
 */
export const show = (args: { post: string | { slug: string } } | [post: string | { slug: string }] | string | { slug: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/blog\/{post}',
}

/**
 * @see \App\Http\Controllers\BlogController::show
 * @see app/Http/Controllers/BlogController.php:26
 * @route /blog/{post}
 */
show.url = (args: { post: string | { slug: string } } | [post: string | { slug: string }] | string | { slug: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { post: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            post: args[0],
        }
    }

    const parsedArgs = {
        post: typeof args.post === 'object'
            ? args.post.slug
            : args.post,
    }

    return show.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\BlogController::show
 * @see app/Http/Controllers/BlogController.php:26
 * @route /blog/{post}
 */
show.get = (args: { post: string | { slug: string } } | [post: string | { slug: string }] | string | { slug: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\BlogController::show
 * @see app/Http/Controllers/BlogController.php:26
 * @route /blog/{post}
 */
show.head = (args: { post: string | { slug: string } } | [post: string | { slug: string }] | string | { slug: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

export default show