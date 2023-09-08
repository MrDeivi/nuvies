<script setup>
import '@unocss/reset/tailwind.css'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'Nuvies',
  titleTemplate: title => title !== 'Nuvies' ? `${title} · Nuvies` : title,
  meta: [
    { name: 'description', content: 'Discover hundred of movies and tv shows in Nuvies' },
    { property: 'og:image', content: 'https://nuvies.deivi.me/img/og_image.png' },
    { property: 'og:type', content: 'website' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: 'nuvies.deivi.me' },
    { property: 'twitter:url', content: 'https://nuvies.deivi.me/' },
  ],
})
</script>

<template>
  <NuxtLoadingIndicator :duration="10000" />
  <NuxtLayout name="default">
    <div h-full w-full font-sans>
      <NuxtPage />
    </div>
  </NuxtLayout>

  <IframeModal />
  <PhotoModal />
</template>

<style>
html, body , #__nuxt{
  font-family: 'Quicksand';
  height: 100vh;
  margin: 0;
  font-size: 14px;
  padding: 0;
  color: white;
  color-scheme: dark;
  @apply bg-black;

  --radius: 5px;
}
::-webkit-scrollbar {
  width: 6px;
  height: 10px;
  background: transparent;
}

::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba(80, 80, 80, 0.61);
  border-radius: 5px;
  transition: all;
  transition-duration: 100ms;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(80, 80, 80, 0.71);
}
.no-touch {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

::-moz-selection { /* Code for Firefox */
  color: white;
  background: #e7375a
}

::selection {
  color: white;
  background: #e7375a
}
.nuxt-loading-indicator{
  background: repeating-linear-gradient(to right, #e7375a 0%, rgb(254 52 147) 50%, rgb(225 0 26) 100%) 0% 0% / 3333.33% !important;
}
</style>
