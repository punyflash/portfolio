import { addMessages, init, locale } from 'svelte-i18n';
import { subscribe } from "@westacks/vortex";
import { get, readable, writable } from 'svelte/store';
import en from '../../lang/en.json';
import ru from '../../lang/ru.json';
import uk from '../../lang/uk.json';
import day from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import RelativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/en';
import 'dayjs/locale/ru';
import 'dayjs/locale/uk';

day.extend(LocalizedFormat);
day.extend(RelativeTime);

export const dayjs = writable(day);
export const timed = readable(day, set => {
    const interval = setInterval(() => set(day), 1000);
    return () => clearInterval(interval);
})

export function prepareTranslation(fallbackLocale: string, initialLocale: string) {
    addMessages('en', en);
    addMessages('ru', ru);
    addMessages('uk', uk);

    const unsubscribe = subscribe(page => {
        if (!page?.props?.locale) {
            return
        }
        const newLocale = page.props.locale as { current: string, fallback: string }
        locale.set(newLocale.current);
    })

    locale.subscribe(locale => {
        day.locale(locale);
        dayjs.set(day)
    })

    init({ fallbackLocale, initialLocale });

    return unsubscribe
}

export function localized(route: Function) {
    return (...args) => route({ locale: get(locale) }, ...args);
}
