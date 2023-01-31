<template>
    <div class="bg-white p-4 rounded-lg shadow-md">
        <div class="flex items-center py-2">
        <input type="text" id="cityPlace" class="p-2 w-full border border-gray-300 placeholder-gray-500" placeholder="Ann Arbor, MI">
        <input type="hidden" id="cityPlaceID" name="cityPlaceID" value='ChIJMx9D1A2wPIgR4rXIhkb5Cds'>
        <button class="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 17V19H9V17H3ZM3 5V7H13V5H3ZM13 10V12H21V10H13Z" fill="currentColor"/>
            </svg>

        </button>
        </div>
        <button id="exploreButton" class="text-white p-2 w-full mt-2">Explore</button>
  </div>
</template>

<style>
    #exploreButton {
        background: linear-gradient(135deg,#ff690f 0%,#e8381b 100%);
    }
</style>