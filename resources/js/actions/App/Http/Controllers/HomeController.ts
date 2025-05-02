import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\HomeController::HomeController6666cd76f96956469e7be39d750cc7d9
 * @see app/Http/Controllers/HomeController.php:10
 * @route /
 */
const HomeController6666cd76f96956469e7be39d750cc7d9 = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: HomeController6666cd76f96956469e7be39d750cc7d9.url(options),
    method: 'get',
})

HomeController6666cd76f96956469e7be39d750cc7d9.definition = {
    methods: ['get','head'],
    url: '\/',
}

/**
 * @see \App\Http\Controllers\HomeController::HomeController6666cd76f96956469e7be39d750cc7d9
 * @see app/Http/Controllers/HomeController.php:10
 * @route /
 */
HomeController6666cd76f96956469e7be39d750cc7d9.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return HomeController6666cd76f96956469e7be39d750cc7d9.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\HomeController::HomeController6666cd76f96956469e7be39d750cc7d9
 * @see app/Http/Controllers/HomeController.php:10
 * @route /
 */
HomeController6666cd76f96956469e7be39d750cc7d9.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: HomeController6666cd76f96956469e7be39d750cc7d9.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\HomeController::HomeController6666cd76f96956469e7be39d750cc7d9
 * @see app/Http/Controllers/HomeController.php:10
 * @route /
 */
HomeController6666cd76f96956469e7be39d750cc7d9.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: HomeController6666cd76f96956469e7be39d750cc7d9.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\HomeController::HomeController992fca4f6395a62fbb435f4298e9cd79
 * @see app/Http/Controllers/HomeController.php:10
 * @route /{locale}
 */
const HomeController992fca4f6395a62fbb435f4298e9cd79 = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: HomeController992fca4f6395a62fbb435f4298e9cd79.url(args, options),
    method: 'get',
})

HomeController992fca4f6395a62fbb435f4298e9cd79.definition = {
    methods: ['get','head'],
    url: '\/{locale}',
}

/**
 * @see \App\Http\Controllers\HomeController::HomeController992fca4f6395a62fbb435f4298e9cd79
 * @see app/Http/Controllers/HomeController.php:10
 * @route /{locale}
 */
HomeController992fca4f6395a62fbb435f4298e9cd79.url = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return HomeController992fca4f6395a62fbb435f4298e9cd79.definition.url
            .replace('{locale}', parsedArgs.locale.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\HomeController::HomeController992fca4f6395a62fbb435f4298e9cd79
 * @see app/Http/Controllers/HomeController.php:10
 * @route /{locale}
 */
HomeController992fca4f6395a62fbb435f4298e9cd79.get = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: HomeController992fca4f6395a62fbb435f4298e9cd79.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\HomeController::HomeController992fca4f6395a62fbb435f4298e9cd79
 * @see app/Http/Controllers/HomeController.php:10
 * @route /{locale}
 */
HomeController992fca4f6395a62fbb435f4298e9cd79.head = (args: { locale: string | number } | [locale: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: HomeController992fca4f6395a62fbb435f4298e9cd79.url(args, options),
    method: 'head',
})

const HomeController = {
    '\/': HomeController6666cd76f96956469e7be39d750cc7d9,
    '\/{locale}': HomeController992fca4f6395a62fbb435f4298e9cd79,
}

export default HomeController