import { addMessages, init, locale } from 'svelte-i18n';
import { page } from "@inertiajs/svelte";
import { get } from 'svelte/store';
import en from '../../lang/en.json';
import ru from '../../lang/ru.json';
import uk from '../../lang/uk.json';

export function prepareTranslation(fallbackLocale: string, initialLocale: string) {
    addMessages('en', en);
    addMessages('ru', ru);
    addMessages('uk', uk);

    page.subscribe(page => {
        if (!page?.props?.locale) {
            return
        }
        const newLocale = page.props.locale as { default: string, fallback: string }
        locale.set(newLocale.default);
    })

    return init({ fallbackLocale, initialLocale });
}

export function localized(route: Function) {
    return (...args) => route({ locale: get(locale) }, ...args);
}
