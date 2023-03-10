import axios from 'axios'
import { I18n } from '@/plugins/I18n'
import { StorageService } from '@/services/StorageService'
import moment from 'moment'

export class LanguageHelper {

    private static _langSupport: string[] = ['vi', 'en']

    /**
     * Init language.
     * @static
     * @returns {Promise<boolean>}.
     */
    static async loadLanguage(): Promise<boolean> {
        try {
            if (this._langSupport) {
                for (const langKey of this._langSupport) {
                    const languages = await this.getLanguage(langKey)
                    await this.setLanguage(langKey, languages)
                }
            }
            return true
        } catch (e) {
            return false
        }
    }

    /**
     * Get language local.
     * @static
     * @param lang string.
     * @returns {Promise<object>}.
     */
    static async getLanguage(lang: string = 'vi'): Promise<object> {
        try {
            const url = `${import.meta.env.VITE_BASE_URL}/locales/${lang}.json?v=${(import.meta.env.VITE_VERSION || '1.0.0')}&t=${moment().unix()}`
            const { data } = await axios.get(url)
            return data
        } catch (e) {
            return {}
        }
    }

    /**
     * Set language for i18n.
     * @static
     * @param lang string.
     * @param objectLang object.
     * @returns {void}.
     */
    static setLanguage(lang: string = 'vi', objectLang?: object): void {
        try {
            I18n.global.setLocaleMessage(lang, {
                ...objectLang,
            })
        } catch (e) {
        }
    }


    /**
     * Get the app's current language.
     * @static
     * @returns {string} Returns the converted string.
     */
    static getLocale(): string {
        let locale = StorageService.get('locale')
        if (locale) return locale
        if (document) locale = document.getElementsByTagName('html')[0].getAttribute('lang')
        if (!locale) locale = import.meta.env.VITE_LOCALE
        return locale.toString()
    }


    /**
     * Set the app's current language.
     * @static
     * @returns {void}
     */
    static setLocale(lang?: string): void {
        if (!lang) lang = this.getLocale()
        if (lang) {
            /*
            * Setting Locale Global for i18n
            * */
            I18n.global.locale.value = lang

            document.querySelector('html')?.setAttribute('lang', lang)
            StorageService.set('locale', lang, 60 * 60 * 24 * 7)
        }
    }
}

