import show from './show'
import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\BlogController::index
 * @see app/Http/Controllers/BlogController.php:12
 * @route /blog
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
    url: '\/blog',
}

/**
 * @see \App\Http\Controllers\BlogController::index
 * @see app/Http/Controllers/BlogController.php:12
 * @route /blog
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\BlogController::index
 * @see app/Http/Controllers/BlogController.php:12
 * @route /blog
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\BlogController::index
 * @see app/Http/Controllers/BlogController.php:12
 * @route /blog
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

const blog = {
    index, 
    show,
}

export default blog