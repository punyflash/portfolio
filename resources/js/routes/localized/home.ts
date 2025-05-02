import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:10
 * @route /{locale}
 */
export const home = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: home.url(args, options),
    method: 'get',
})

home.definition = {
    methods: ['get','head'],
    url: '\/{locale}',
}

/**
 * @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:10
 * @route /{locale}
 */
home.url = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return home.definition.url
            .replace('{locale}', parsedArgs.locale.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:10
 * @route /{locale}
 */
home.get = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: home.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:10
 * @route /{locale}
 */
home.head = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: home.url(args, options),
    method: 'head',
})

export default home