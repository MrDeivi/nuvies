<script lang="ts" setup>
import type { Person } from '~/types'

const props = defineProps<{ person: Person }>()
</script>

<template>
  <div class="">
    <div flex="~ col" gap5>
      <PersonCreditsList
        v-if="person.combined_credits?.cast?.length"
        title="Acting Credits"
        :items="person.combined_credits.cast"
      />
      <PersonCreditsList
        v-if="person.combined_credits?.crew?.length"
        title="Production Credits"
        :items="person.combined_credits.crew"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
