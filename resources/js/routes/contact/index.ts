import store from './store'
import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\ContactController::index
 * @see app/Http/Controllers/ContactController.php:12
 * @route /contact
 */
export const index = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '\/contact',
}

/**
 * @see \App\Http\Controllers\ContactController::index
 * @see app/Http/Controllers/ContactController.php:12
 * @route /contact
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ContactController::index
 * @see app/Http/Controllers/ContactController.php:12
 * @route /contact
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ContactController::index
 * @see app/Http/Controllers/ContactController.php:12
 * @route /contact
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

const contact = {
    index, 
    store,
}

export default contact