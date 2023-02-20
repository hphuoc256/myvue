<template>
    <form @submit.prevent="submitForm">
        <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
            <div class="group">
                <label class="block">
                    <span class="block text-sm font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500">
                        {{ $t('auth.email') }}
                    </span>
                    <input
                        v-model="form.email"
                        type="text" name="email" id="email"
                        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50
                                   disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500
                                   block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600
                                   focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                        :class="{'border-rose-600' :  v$.email.$error }"
                        :placeholder="$t('auth.email')"
                    >
                    <span v-if="v$.email.$errors.length" class="mt-2 peer-invalid:visible text-red-500 text-sm">
                        {{ v$.email.$errors.length ? v$.email.$errors.at(0).$message : '' }}
                    </span>
                </label>
            </div>

            <div class="group">
                <label class="block">
                    <span class="block text-sm font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500">
                        Code Email
                    </span>
                    <input
                        v-model="form.code"
                        type="text" name="code" id="code"
                        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50
                                   disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500
                                   block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600
                                   focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                        :class="{'border-rose-600' :  v$.code.$error }"
                        :placeholder="'Code Email'"
                    >
                    <span v-if="v$.code.$errors.length" class="mt-2 peer-invalid:visible text-red-500 text-sm">
                        {{ v$.code.$errors.length ? v$.code.$errors.at(0).$message : '' }}
                    </span>
                </label>
            </div>

            <div class="btn-submit">
                <div class="flex">
                    <button
                        class="w-full bg-sky-500 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white flex justify-center items-center"
                        :class="[ (v$.$error || requestSubmit) ? 'hover:no-underline opacity-50' : 'hover:bg-sky-700']"
                        :disabled="v$.$error || requestSubmit"
                    >
                        <svg v-if="requestSubmit" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                        Confirm
                    </button>
                </div>
                <div class="mt-2 flex justify-between">
                    <router-link
                        class="block text-sm font-medium text-blue-500"
                        :to="{name: 'auth.login'}"
                    >
                        Back to Sign in
                    </router-link>
                </div>
            </div>
        </div>
    </form>
</template>

<script lang="ts" setup name="Form">
import { helpers } from '@vuelidate/validators'
import { email, maxLength, minLength, required } from '@/plugins/Vuelidate'
import { useVuelidate } from '@vuelidate/core'

const { t } = useI18n()

const requestSubmit = ref<boolean>(false)
const form = reactive({
    email: null,
    code: null,
})

const rules = computed(() => ({
    email: {
        required: helpers.withParams({ attribute: t('auth.email') }, required),
        email: helpers.withParams({ attribute: t('auth.email') }, email),
        minLength: helpers.withParams({ attribute: t('auth.email'), min: 3 }, minLength(3)),
    },
    code: {
        required: helpers.withParams({ attribute: 'Code Email' }, required),
        minLength: helpers.withParams({ attribute: 'Code Email', min: 6 }, minLength(6)),
        maxLength: helpers.withParams({ attribute: 'Code Email', max: 6 }, maxLength(6)),
    },
}))
const v$ = useVuelidate(rules, form)

const submitForm = () => {
    v$.value.$touch()
    const isError = v$.value.$error

    if (!isError) {
        requestSubmit.value = true
    }
}

</script>

<style lang="scss" scoped>

</style>
