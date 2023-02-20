import type { App } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import {
    Bars3Icon,
    BellIcon,
    XMarkIcon,
    LockClosedIcon,
    ChevronDownIcon,
    CheckIcon,
    FolderOpenIcon,
    Cog6ToothIcon,
    UserIcon,
    ArrowRightOnRectangleIcon,
    ArrowLeftOnRectangleIcon,
    UserPlusIcon,
} from '@heroicons/vue/24/outline'

import { Input } from 'flowbite-vue'

export default {
    install: (app: App) => {
        app.component('Disclosure', Disclosure)
        app.component('DisclosureButton', DisclosureButton)
        app.component('DisclosurePanel', DisclosurePanel)
        app.component('Menu', Menu)
        app.component('MenuButton', MenuButton)
        app.component('MenuItem', MenuItem)
        app.component('MenuItems', MenuItems)

        app.component('Bars3Icon', Bars3Icon)
        app.component('BellIcon', BellIcon)
        app.component('XMarkIcon', XMarkIcon)
        app.component('LockClosedIcon', LockClosedIcon)
        app.component('ChevronDownIcon', ChevronDownIcon)
        app.component('CheckIcon', CheckIcon)
        app.component('Cog6ToothIcon', Cog6ToothIcon)
        app.component('FolderOpenIcon', FolderOpenIcon)
        app.component('UserIcon', UserIcon)
        app.component('ArrowRightOnRectangleIcon', ArrowRightOnRectangleIcon)
        app.component('ArrowLeftOnRectangleIcon', ArrowLeftOnRectangleIcon)
        app.component('UserPlusIcon', UserPlusIcon)

    },
}
