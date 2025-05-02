import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\ContactController::index90609cfd31a32bdbd3d81843c57d356b
 * @see app/Http/Controllers/ContactController.php:12
 * @route /contact
 */
const index90609cfd31a32bdbd3d81843c57d356b = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index90609cfd31a32bdbd3d81843c57d356b.url(options),
    method: 'get',
})

index90609cfd31a32bdbd3d81843c57d356b.definition = {
    methods: ['get','head'],
    url: '\/contact',
}

/**
 * @see \App\Http\Controllers\ContactController::index90609cfd31a32bdbd3d81843c57d356b
 * @see app/Http/Controllers/ContactController.php:12
 * @route /contact
 */
index90609cfd31a32bdbd3d81843c57d356b.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index90609cfd31a32bdbd3d81843c57d356b.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ContactController::index90609cfd31a32bdbd3d81843c57d356b
 * @see app/Http/Controllers/ContactController.php:12
 * @route /contact
 */
index90609cfd31a32bdbd3d81843c57d356b.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index90609cfd31a32bdbd3d81843c57d356b.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ContactController::index90609cfd31a32bdbd3d81843c57d356b
 * @see app/Http/Controllers/ContactController.php:12
 * @route /contact
 */
index90609cfd31a32bdbd3d81843c57d356b.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index90609cfd31a32bdbd3d81843c57d356b.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\ContactController::indexfaccfc5aea46b3377d47210553c0ca81
 * @see app/Http/Controllers/ContactController.php:12
 * @route /{locale}/contact
 */
const indexfaccfc5aea46b3377d47210553c0ca81 = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: indexfaccfc5aea46b3377d47210553c0ca81.url(args, options),
    method: 'get',
})

indexfaccfc5aea46b3377d47210553c0ca81.definition = {
    methods: ['get','head'],
    url: '\/{locale}\/contact',
}

/**
 * @see \App\Http\Controllers\ContactController::indexfaccfc5aea46b3377d47210553c0ca81
 * @see app/Http/Controllers/ContactController.php:12
 * @route /{locale}/contact
 */
indexfaccfc5aea46b3377d47210553c0ca81.url = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return indexfaccfc5aea46b3377d47210553c0ca81.definition.url
            .replace('{locale}', parsedArgs.locale.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ContactController::indexfaccfc5aea46b3377d47210553c0ca81
 * @see app/Http/Controllers/ContactController.php:12
 * @route /{locale}/contact
 */
indexfaccfc5aea46b3377d47210553c0ca81.get = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: indexfaccfc5aea46b3377d47210553c0ca81.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ContactController::indexfaccfc5aea46b3377d47210553c0ca81
 * @see app/Http/Controllers/ContactController.php:12
 * @route /{locale}/contact
 */
indexfaccfc5aea46b3377d47210553c0ca81.head = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: indexfaccfc5aea46b3377d47210553c0ca81.url(args, options),
    method: 'head',
})

export const index = {
    '\/contact': index90609cfd31a32bdbd3d81843c57d356b,
    '\/{locale}\/contact': indexfaccfc5aea46b3377d47210553c0ca81,
}

/**
 * @see \App\Http\Controllers\ContactController::store90609cfd31a32bdbd3d81843c57d356b
 * @see app/Http/Controllers/ContactController.php:17
 * @route /contact
 */
const store90609cfd31a32bdbd3d81843c57d356b = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store90609cfd31a32bdbd3d81843c57d356b.url(options),
    method: 'post',
})

store90609cfd31a32bdbd3d81843c57d356b.definition = {
    methods: ['post'],
    url: '\/contact',
}

/**
 * @see \App\Http\Controllers\ContactController::store90609cfd31a32bdbd3d81843c57d356b
 * @see app/Http/Controllers/ContactController.php:17
 * @route /contact
 */
store90609cfd31a32bdbd3d81843c57d356b.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store90609cfd31a32bdbd3d81843c57d356b.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ContactController::store90609cfd31a32bdbd3d81843c57d356b
 * @see app/Http/Controllers/ContactController.php:17
 * @route /contact
 */
store90609cfd31a32bdbd3d81843c57d356b.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store90609cfd31a32bdbd3d81843c57d356b.url(options),
    method: 'post',
})

/**
 * @see \App\Http\Controllers\ContactController::storefaccfc5aea46b3377d47210553c0ca81
 * @see app/Http/Controllers/ContactController.php:17
 * @route /{locale}/contact
 */
const storefaccfc5aea46b3377d47210553c0ca81 = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: storefaccfc5aea46b3377d47210553c0ca81.url(args, options),
    method: 'post',
})

storefaccfc5aea46b3377d47210553c0ca81.definition = {
    methods: ['post'],
    url: '\/{locale}\/contact',
}

/**
 * @see \App\Http\Controllers\ContactController::storefaccfc5aea46b3377d47210553c0ca81
 * @see app/Http/Controllers/ContactController.php:17
 * @route /{locale}/contact
 */
storefaccfc5aea46b3377d47210553c0ca81.url = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return storefaccfc5aea46b3377d47210553c0ca81.definition.url
            .replace('{locale}', parsedArgs.locale.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ContactController::storefaccfc5aea46b3377d47210553c0ca81
 * @see app/Http/Controllers/ContactController.php:17
 * @route /{locale}/contact
 */
storefaccfc5aea46b3377d47210553c0ca81.post = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: storefaccfc5aea46b3377d47210553c0ca81.url(args, options),
    method: 'post',
})

export const store = {
    '\/contact': store90609cfd31a32bdbd3d81843c57d356b,
    '\/{locale}\/contact': storefaccfc5aea46b3377d47210553c0ca81,
}

const ContactController = { index, store }

export default ContactController