<template>
  <nav class="flex items-center justify-between flex-wrap color1 p-6 shadow-xl">
    <div class="flex items-center flex-shrink-0 color2 mr-6">
      <span class="font-semibold text-xl tracking-wide">DistLists</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          href="#aboutUs"
          class="block mt-4 lg:inline-block lg:mt-0 color2 hover:text-white mr-4"
        >
        {{$t('aboutusTitle')}}
        </a>
        <a
          href="#serviceIntro"
          class="block mt-4 lg:inline-block lg:mt-0 color2 hover:text-white mr-4"
        >
        {{$t('serviceIntroTitle')}}
        </a>
        <a
          href="#ourTeam"
          class="block mt-4 lg:inline-block lg:mt-0 color2 hover:text-white mr-4"
        >
        {{$t('ourTeamTitle')}}
        </a>
      </div>
      <div>
        <button
          class="text-white mx-4 text-sm hover:text-gray-400"
          @click="$i18n.locale = 'ko'"
        >
          {{$t('korean')}}
        </button>
        <span class="text-white">/</span>
        <button
          class="text-white mx-4 text-sm hover:text-gray-400"
          @click="$i18n.locale = 'en'"
        >
          {{$t('english')}}
        </button>
      </div>
      <a
        href="https://discord.gg/bGkKVSj"
        class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
        >{{$t('discord')}}</a
      >
    </div>
  </nav>
</template>

<style>
.color1 {
  background-color: #1a202c;
}
.color2 {
  color: #f7fafc;
}

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
