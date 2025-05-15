import { readable } from 'svelte/store'
import { subscribe, getPage, useForm as _useForm } from '@westacks/vortex'

export const page = readable(getPage(), (set) => subscribe((page) => set(page)))

export function useForm<T extends object>(rememberKeyOrData: string | T | (() => T), maybeData?: T | (() => T)) {
    const { get, subscribe } = _useForm(rememberKeyOrData, maybeData)

    const store = readable(get(), subscribe)
    // @ts-ignore
    store.set = () => {}

    return store
}
