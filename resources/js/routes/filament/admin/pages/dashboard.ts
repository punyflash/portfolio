import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \Filament\Pages\Dashboard::dashboard
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route /admin
 */
export const dashboard = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ['get','head'],
    url: '\/admin',
}

/**
 * @see \Filament\Pages\Dashboard::dashboard
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route /admin
 */
dashboard.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return dashboard.definition.url + queryParams(options)
}

/**
 * @see \Filament\Pages\Dashboard::dashboard
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route /admin
 */
dashboard.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
 * @see \Filament\Pages\Dashboard::dashboard
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route /admin
 */
dashboard.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: dashboard.url(options),
    method: 'head',
})

export default dashboard