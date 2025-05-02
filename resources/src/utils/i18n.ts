import { addMessages, init, locale } from 'svelte-i18n';
import { page } from "@inertiajs/svelte";
import { get, writable } from 'svelte/store';
import en from '../../lang/en.json';
import ru from '../../lang/ru.json';
import uk from '../../lang/uk.json';
import day from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/en';
import 'dayjs/locale/ru';
import 'dayjs/locale/uk';

day.extend(LocalizedFormat);

export const dayjs = writable(day);

export function prepareTranslation(fallbackLocale: string, initialLocale: string) {
    addMessages('en', en);
    addMessages('ru', ru);
    addMessages('uk', uk);

    page.subscribe(page => {
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

    return init({ fallbackLocale, initialLocale });
}

export function localized(route: Function) {
    return (...args) => route({ locale: get(locale) }, ...args);
}
