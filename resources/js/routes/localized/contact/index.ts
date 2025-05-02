import store from './store'
import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\ContactController::index
 * @see app/Http/Controllers/ContactController.php:12
 * @route /{locale}/contact
 */
export const index = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '\/{locale}\/contact',
}

/**
 * @see \App\Http\Controllers\ContactController::index
 * @see app/Http/Controllers/ContactController.php:12
 * @route /{locale}/contact
 */
index.url = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return index.definition.url
            .replace('{locale}', parsedArgs.locale.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ContactController::index
 * @see app/Http/Controllers/ContactController.php:12
 * @route /{locale}/contact
 */
index.get = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ContactController::index
 * @see app/Http/Controllers/ContactController.php:12
 * @route /{locale}/contact
 */
index.head = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(args, options),
    method: 'head',
})

const contact = {
    index, 
    store,
}

export default contact