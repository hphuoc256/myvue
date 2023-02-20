<template>
    <div id="profile">
        Profile
    </div>
</template>


<script lang="ts" setup name="Profile">
import type { AppStore } from '@/stores/appStore'
import { useAppStore } from '@/stores/appStore'

const appStore: AppStore = useAppStore()


</script>

<style scoped lang="scss"></style>
