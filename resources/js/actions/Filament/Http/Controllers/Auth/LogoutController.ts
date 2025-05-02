import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
 * @see \Filament\Http\Controllers\Auth\LogoutController::LogoutController
 * @see vendor/filament/filament/src/Http/Controllers/Auth/LogoutController.php:10
 * @route /admin/logout
 */
const LogoutController = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: LogoutController.url(options),
    method: 'post',
})

LogoutController.definition = {
    methods: ['post'],
    url: '\/admin\/logout',
}

/**
 * @see \Filament\Http\Controllers\Auth\LogoutController::LogoutController
 * @see vendor/filament/filament/src/Http/Controllers/Auth/LogoutController.php:10
 * @route /admin/logout
 */
LogoutController.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return LogoutController.definition.url + queryParams(options)
}

/**
 * @see \Filament\Http\Controllers\Auth\LogoutController::LogoutController
 * @see vendor/filament/filament/src/Http/Controllers/Auth/LogoutController.php:10
 * @route /admin/logout
 */
LogoutController.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: LogoutController.url(options),
    method: 'post',
})

export default LogoutController