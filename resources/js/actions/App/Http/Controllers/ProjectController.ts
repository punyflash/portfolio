import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\ProjectController::index70e1733efe56e20a6edcb96632119b4b
 * @see app/Http/Controllers/ProjectController.php:11
 * @route /projects
 */
const index70e1733efe56e20a6edcb96632119b4b = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index70e1733efe56e20a6edcb96632119b4b.url(options),
    method: 'get',
})

index70e1733efe56e20a6edcb96632119b4b.definition = {
    methods: ['get','head'],
    url: '\/projects',
}

/**
 * @see \App\Http\Controllers\ProjectController::index70e1733efe56e20a6edcb96632119b4b
 * @see app/Http/Controllers/ProjectController.php:11
 * @route /projects
 */
index70e1733efe56e20a6edcb96632119b4b.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index70e1733efe56e20a6edcb96632119b4b.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProjectController::index70e1733efe56e20a6edcb96632119b4b
 * @see app/Http/Controllers/ProjectController.php:11
 * @route /projects
 */
index70e1733efe56e20a6edcb96632119b4b.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index70e1733efe56e20a6edcb96632119b4b.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ProjectController::index70e1733efe56e20a6edcb96632119b4b
 * @see app/Http/Controllers/ProjectController.php:11
 * @route /projects
 */
index70e1733efe56e20a6edcb96632119b4b.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index70e1733efe56e20a6edcb96632119b4b.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\ProjectController::index02743b49fdb12de0b8da072bc0ef3afe
 * @see app/Http/Controllers/ProjectController.php:11
 * @route /{locale}/projects
 */
const index02743b49fdb12de0b8da072bc0ef3afe = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index02743b49fdb12de0b8da072bc0ef3afe.url(args, options),
    method: 'get',
})

index02743b49fdb12de0b8da072bc0ef3afe.definition = {
    methods: ['get','head'],
    url: '\/{locale}\/projects',
}

/**
 * @see \App\Http\Controllers\ProjectController::index02743b49fdb12de0b8da072bc0ef3afe
 * @see app/Http/Controllers/ProjectController.php:11
 * @route /{locale}/projects
 */
index02743b49fdb12de0b8da072bc0ef3afe.url = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return index02743b49fdb12de0b8da072bc0ef3afe.definition.url
            .replace('{locale}', parsedArgs.locale.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProjectController::index02743b49fdb12de0b8da072bc0ef3afe
 * @see app/Http/Controllers/ProjectController.php:11
 * @route /{locale}/projects
 */
index02743b49fdb12de0b8da072bc0ef3afe.get = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index02743b49fdb12de0b8da072bc0ef3afe.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ProjectController::index02743b49fdb12de0b8da072bc0ef3afe
 * @see app/Http/Controllers/ProjectController.php:11
 * @route /{locale}/projects
 */
index02743b49fdb12de0b8da072bc0ef3afe.head = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index02743b49fdb12de0b8da072bc0ef3afe.url(args, options),
    method: 'head',
})

export const index = {
    '\/projects': index70e1733efe56e20a6edcb96632119b4b,
    '\/{locale}\/projects': index02743b49fdb12de0b8da072bc0ef3afe,
}

/**
 * @see \App\Http\Controllers\ProjectController::show35059450d40bdd929dc958928a56f864
 * @see app/Http/Controllers/ProjectController.php:22
 * @route /projects/{project}
 */
const show35059450d40bdd929dc958928a56f864 = (args: { project: string | { slug: string } } | [project: string | { slug: string }] | string | { slug: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show35059450d40bdd929dc958928a56f864.url(args, options),
    method: 'get',
})

show35059450d40bdd929dc958928a56f864.definition = {
    methods: ['get','head'],
    url: '\/projects\/{project}',
}

/**
 * @see \App\Http\Controllers\ProjectController::show35059450d40bdd929dc958928a56f864
 * @see app/Http/Controllers/ProjectController.php:22
 * @route /projects/{project}
 */
show35059450d40bdd929dc958928a56f864.url = (args: { project: string | { slug: string } } | [project: string | { slug: string }] | string | { slug: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return show35059450d40bdd929dc958928a56f864.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProjectController::show35059450d40bdd929dc958928a56f864
 * @see app/Http/Controllers/ProjectController.php:22
 * @route /projects/{project}
 */
show35059450d40bdd929dc958928a56f864.get = (args: { project: string | { slug: string } } | [project: string | { slug: string }] | string | { slug: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show35059450d40bdd929dc958928a56f864.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ProjectController::show35059450d40bdd929dc958928a56f864
 * @see app/Http/Controllers/ProjectController.php:22
 * @route /projects/{project}
 */
show35059450d40bdd929dc958928a56f864.head = (args: { project: string | { slug: string } } | [project: string | { slug: string }] | string | { slug: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show35059450d40bdd929dc958928a56f864.url(args, options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\ProjectController::show5ecda01b22e9a474b58bff99fa2db9f3
 * @see app/Http/Controllers/ProjectController.php:22
 * @route /{locale}/projects/{project}
 */
const show5ecda01b22e9a474b58bff99fa2db9f3 = (args: { locale: string | number, project: string | { slug: string } } | [locale: string | number, project: string | { slug: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show5ecda01b22e9a474b58bff99fa2db9f3.url(args, options),
    method: 'get',
})

show5ecda01b22e9a474b58bff99fa2db9f3.definition = {
    methods: ['get','head'],
    url: '\/{locale}\/projects\/{project}',
}

/**
 * @see \App\Http\Controllers\ProjectController::show5ecda01b22e9a474b58bff99fa2db9f3
 * @see app/Http/Controllers/ProjectController.php:22
 * @route /{locale}/projects/{project}
 */
show5ecda01b22e9a474b58bff99fa2db9f3.url = (args: { locale: string | number, project: string | { slug: string } } | [locale: string | number, project: string | { slug: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return show5ecda01b22e9a474b58bff99fa2db9f3.definition.url
            .replace('{locale}', parsedArgs.locale.toString())
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProjectController::show5ecda01b22e9a474b58bff99fa2db9f3
 * @see app/Http/Controllers/ProjectController.php:22
 * @route /{locale}/projects/{project}
 */
show5ecda01b22e9a474b58bff99fa2db9f3.get = (args: { locale: string | number, project: string | { slug: string } } | [locale: string | number, project: string | { slug: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show5ecda01b22e9a474b58bff99fa2db9f3.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ProjectController::show5ecda01b22e9a474b58bff99fa2db9f3
 * @see app/Http/Controllers/ProjectController.php:22
 * @route /{locale}/projects/{project}
 */
show5ecda01b22e9a474b58bff99fa2db9f3.head = (args: { locale: string | number, project: string | { slug: string } } | [locale: string | number, project: string | { slug: string }], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show5ecda01b22e9a474b58bff99fa2db9f3.url(args, options),
    method: 'head',
})

export const show = {
    '\/projects\/{project}': show35059450d40bdd929dc958928a56f864,
    '\/{locale}\/projects\/{project}': show5ecda01b22e9a474b58bff99fa2db9f3,
}

const ProjectController = { index, show }

export default ProjectController