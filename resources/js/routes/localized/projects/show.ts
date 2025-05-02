import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:22
 * @route /{locale}/projects/{project}
 */
export const show = (args: { locale: string | number, project: string | { slug: string } } | [locale: string | number, project: string | { slug: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/{locale}\/projects\/{project}',
}

/**
 * @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:22
 * @route /{locale}/projects/{project}
 */
show.url = (args: { locale: string | number, project: string | { slug: string } } | [locale: string | number, project: string | { slug: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (Array.isArray(args)) {
        args = {
            locale: args[0],
            project: args[1],
        }
    }

    const parsedArgs = {
        locale: args.locale,
        project: typeof args.project === 'object'
            ? args.project.slug
            : args.project,
    }

    return show.definition.url
            .replace('{locale}', parsedArgs.locale.toString())
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:22
 * @route /{locale}/projects/{project}
 */
show.get = (args: { locale: string | number, project: string | { slug: string } } | [locale: string | number, project: string | { slug: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:22
 * @route /{locale}/projects/{project}
 */
show.head = (args: { locale: string | number, project: string | { slug: string } } | [locale: string | number, project: string | { slug: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

export default show