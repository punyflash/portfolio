import show from './show'
import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\ProjectController::index
 * @see app/Http/Controllers/ProjectController.php:11
 * @route /projects
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
    url: '\/projects',
}

/**
 * @see \App\Http\Controllers\ProjectController::index
 * @see app/Http/Controllers/ProjectController.php:11
 * @route /projects
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProjectController::index
 * @see app/Http/Controllers/ProjectController.php:11
 * @route /projects
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ProjectController::index
 * @see app/Http/Controllers/ProjectController.php:11
 * @route /projects
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

const projects = {
    index, 
    show,
}

export default projects