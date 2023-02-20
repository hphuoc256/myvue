<template>
    <div id="sign-in">
        <div class="max-w-2xl mx-auto justify-center">
            <div class="mx-auto flex max-w-7xl flex-col gap-y-4 text-center">
                <dt class="text-base leading-7 text-gray-600">
                    Password retrieval
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Forgot Password
                </dd>
            </div>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 shadow sm:overflow-hidden sm:rounded-md mt-5">

                <Form />

            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="Forgot">

import Form from './components/form.vue'

</script>

<style scoped lang="scss">

</style>
