export type Paginated<T> = {
    data: T[]
    links: {
        first: string
        last: string
        prev: ?string
        next: ?string
    }
    meta: {
        next_cursor?: string
        prev_cursor?: string
        current_page?: number
        from?: number
        last_page?: number
        links?: {
            url: ?string
            label: string
            active: boolean
        }[]
        path: string
        per_page: number
        to?: number
        total?: number
    }
}
