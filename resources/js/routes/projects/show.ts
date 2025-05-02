import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:22
 * @route /projects/{project}
 */
export const show = (args: { project: string | { slug: string } } | [project: string | { slug: string }] | string | { slug: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/projects\/{project}',
}

/**
 * @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:22
 * @route /projects/{project}
 */
show.url = (args: { project: string | { slug: string } } | [project: string | { slug: string }] | string | { slug: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
        args = { project: args.slug }
    }

    if (Array.isArray(args)) {
        args = {
            project: args[0],
        }
    }

    const parsedArgs = {
        project: typeof args.project === 'object'
            ? args.project.slug
            : args.project,
    }

    return show.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:22
 * @route /projects/{project}
 */
show.get = (args: { project: string | { slug: string } } | [project: string | { slug: string }] | string | { slug: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:22
 * @route /projects/{project}
 */
show.head = (args: { project: string | { slug: string } } | [project: string | { slug: string }] | string | { slug: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

export default show