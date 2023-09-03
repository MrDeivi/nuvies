<script lang="ts" setup>
const { sliderRef } = useDraggableSlider()
</script>

<template>
  <div ref="sliderRef" class="slider flex flex-row space-x-6 mt3 no-touch">
    <slot />
  </div>
</template>

<style  scoped>
.slider {
    position: relative;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    transition: all 0.2s;
    /* transform: scale(0.98); */
    will-change: transform;
    user-select: none;
    cursor: pointer;
    @apply pl-2 lg:pl-0;
  }

  @media screen and (max-width: 800px){
     .slider::-webkit-scrollbar-thumb {
         background: transparent;
         height: 3px;
     }
  }
 </style>
