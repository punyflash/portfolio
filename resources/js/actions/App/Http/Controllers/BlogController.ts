import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\BlogController::indexc061e150208a7ab43c1b0b723b79816b
 * @see app/Http/Controllers/BlogController.php:12
 * @route /blog
 */
const indexc061e150208a7ab43c1b0b723b79816b = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: indexc061e150208a7ab43c1b0b723b79816b.url(options),
    method: 'get',
})

indexc061e150208a7ab43c1b0b723b79816b.definition = {
    methods: ['get','head'],
    url: '\/blog',
}

/**
 * @see \App\Http\Controllers\BlogController::indexc061e150208a7ab43c1b0b723b79816b
 * @see app/Http/Controllers/BlogController.php:12
 * @route /blog
 */
indexc061e150208a7ab43c1b0b723b79816b.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return indexc061e150208a7ab43c1b0b723b79816b.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\BlogController::indexc061e150208a7ab43c1b0b723b79816b
 * @see app/Http/Controllers/BlogController.php:12
 * @route /blog
 */
indexc061e150208a7ab43c1b0b723b79816b.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: indexc061e150208a7ab43c1b0b723b79816b.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\BlogController::indexc061e150208a7ab43c1b0b723b79816b
 * @see app/Http/Controllers/BlogController.php:12
 * @route /blog
 */
indexc061e150208a7ab43c1b0b723b79816b.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: indexc061e150208a7ab43c1b0b723b79816b.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\BlogController::indexb9e13db6bc63d0a292281645d3639564
 * @see app/Http/Controllers/BlogController.php:12
 * @route /{locale}/blog
 */
const indexb9e13db6bc63d0a292281645d3639564 = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: indexb9e13db6bc63d0a292281645d3639564.url(args, options),
    method: 'get',
})

indexb9e13db6bc63d0a292281645d3639564.definition = {
    methods: ['get','head'],
    url: '\/{locale}\/blog',
}

/**
 * @see \App\Http\Controllers\BlogController::indexb9e13db6bc63d0a292281645d3639564
 * @see app/Http/Controllers/BlogController.php:12
 * @route /{locale}/blog
 */
indexb9e13db6bc63d0a292281645d3639564.url = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { locale: args }
    }

    if (Array.isArray(args)) {
        args = {
            locale: args[0],
        }
    }

    const parsedArgs = {
        locale: args.locale,
    }

    return indexb9e13db6bc63d0a292281645d3639564.definition.url
            .replace('{locale}', parsedArgs.locale.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\BlogController::indexb9e13db6bc63d0a292281645d3639564
 * @see app/Http/Controllers/BlogController.php:12
 * @route /{locale}/blog
 */
indexb9e13db6bc63d0a292281645d3639564.get = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: indexb9e13db6bc63d0a292281645d3639564.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\BlogController::indexb9e13db6bc63d0a292281645d3639564
 * @see app/Http/Controllers/BlogController.php:12
 * @route /{locale}/blog
 */
indexb9e13db6bc63d0a292281645d3639564.head = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: indexb9e13db6bc63d0a292281645d3639564.url(args, options),
    method: 'head',
})

export const index = {
    '\/blog': indexc061e150208a7ab43c1b0b723b79816b,
    '\/{locale}\/blog': indexb9e13db6bc63d0a292281645d3639564,
}

/**
 * @see \App\Http\Controllers\BlogController::show39707127e4607f502af7c11e10edf5c9
 * @see app/Http/Controllers/BlogController.php:26
 * @route /blog/{post}
 */
const show39707127e4607f502af7c11e10edf5c9 = (args: { post: string | { slug: string } } | [post: string | { slug: string }] | string | { slug: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show39707127e4607f502af7c11e10edf5c9.url(args, options),
    method: 'get',
})

show39707127e4607f502af7c11e10edf5c9.definition = {
    methods: ['get','head'],
    url: '\/blog\/{post}',
}

/**
 * @see \App\Http\Controllers\BlogController::show39707127e4607f502af7c11e10edf5c9
 * @see app/Http/Controllers/BlogController.php:26
 * @route /blog/{post}
 */
show39707127e4607f502af7c11e10edf5c9.url = (args: { post: string | { slug: string } } | [post: string | { slug: string }] | string | { slug: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return show39707127e4607f502af7c11e10edf5c9.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\BlogController::show39707127e4607f502af7c11e10edf5c9
 * @see app/Http/Controllers/BlogController.php:26
 * @route /blog/{post}
 */
show39707127e4607f502af7c11e10edf5c9.get = (args: { post: string | { slug: string } } | [post: string | { slug: string }] | string | { slug: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show39707127e4607f502af7c11e10edf5c9.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\BlogController::show39707127e4607f502af7c11e10edf5c9
 * @see app/Http/Controllers/BlogController.php:26
 * @route /blog/{post}
 */
show39707127e4607f502af7c11e10edf5c9.head = (args: { post: string | { slug: string } } | [post: string | { slug: string }] | string | { slug: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show39707127e4607f502af7c11e10edf5c9.url(args, options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\BlogController::showb30879fc987fc842463d73f6627c2371
 * @see app/Http/Controllers/BlogController.php:26
 * @route /{locale}/blog/{post}
 */
const showb30879fc987fc842463d73f6627c2371 = (args: { locale: string | number, post: string | { slug: string } } | [locale: string | number, post: string | { slug: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: showb30879fc987fc842463d73f6627c2371.url(args, options),
    method: 'get',
})

showb30879fc987fc842463d73f6627c2371.definition = {
    methods: ['get','head'],
    url: '\/{locale}\/blog\/{post}',
}

/**
 * @see \App\Http\Controllers\BlogController::showb30879fc987fc842463d73f6627c2371
 * @see app/Http/Controllers/BlogController.php:26
 * @route /{locale}/blog/{post}
 */
showb30879fc987fc842463d73f6627c2371.url = (args: { locale: string | number, post: string | { slug: string } } | [locale: string | number, post: string | { slug: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return showb30879fc987fc842463d73f6627c2371.definition.url
            .replace('{locale}', parsedArgs.locale.toString())
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\BlogController::showb30879fc987fc842463d73f6627c2371
 * @see app/Http/Controllers/BlogController.php:26
 * @route /{locale}/blog/{post}
 */
showb30879fc987fc842463d73f6627c2371.get = (args: { locale: string | number, post: string | { slug: string } } | [locale: string | number, post: string | { slug: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: showb30879fc987fc842463d73f6627c2371.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\BlogController::showb30879fc987fc842463d73f6627c2371
 * @see app/Http/Controllers/BlogController.php:26
 * @route /{locale}/blog/{post}
 */
showb30879fc987fc842463d73f6627c2371.head = (args: { locale: string | number, post: string | { slug: string } } | [locale: string | number, post: string | { slug: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: showb30879fc987fc842463d73f6627c2371.url(args, options),
    method: 'head',
})

export const show = {
    '\/blog\/{post}': show39707127e4607f502af7c11e10edf5c9,
    '\/{locale}\/blog\/{post}': showb30879fc987fc842463d73f6627c2371,
}

const BlogController = { index, show }

export default BlogController