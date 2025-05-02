import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\BlogController::show
 * @see app/Http/Controllers/BlogController.php:26
 * @route /{locale}/blog/{post}
 */
export const show = (args: { locale: string | number, post: string | { slug: string } } | [locale: string | number, post: string | { slug: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/{locale}\/blog\/{post}',
}

/**
 * @see \App\Http\Controllers\BlogController::show
 * @see app/Http/Controllers/BlogController.php:26
 * @route /{locale}/blog/{post}
 */
show.url = (args: { locale: string | number, post: string | { slug: string } } | [locale: string | number, post: string | { slug: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (Array.isArray(args)) {
        args = {
            locale: args[0],
            post: args[1],
        }
    }

    const parsedArgs = {
        locale: args.locale,
        post: typeof args.post === 'object'
            ? args.post.slug
            : args.post,
    }

    return show.definition.url
            .replace('{locale}', parsedArgs.locale.toString())
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\BlogController::show
 * @see app/Http/Controllers/BlogController.php:26
 * @route /{locale}/blog/{post}
 */
show.get = (args: { locale: string | number, post: string | { slug: string } } | [locale: string | number, post: string | { slug: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\BlogController::show
 * @see app/Http/Controllers/BlogController.php:26
 * @route /{locale}/blog/{post}
 */
show.head = (args: { locale: string | number, post: string | { slug: string } } | [locale: string | number, post: string | { slug: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

export default show