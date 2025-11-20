<template lang="">
  <div class="p-6">
    <div class="flex items-center justify-between">
      <h2 class="text-[#013C61] text-lg font-semibold"><slot name="recent-activities"></slot></h2>

      <div class="flex space-x-2">
        <p class="text-[#013C61] text-sm">
          <span class="border-[0.5px] border-[#013C61]/10 rounded-sm"
            ><slot name="table-page"></slot
          ></span>
        </p>

        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.94697 8.04924C0.94697 12.4947 4.55074 16.0985 8.99621 16.0985C13.4417 16.0985 17.0455 12.4947 17.0455 8.04924C17.0455 3.60377 13.4417 0 8.99621 0C4.55074 0 0.94697 3.60377 0.94697 8.04924Z"
            fill="#2BDA53"
          />
          <path
            d="M9.80131 4.82953L6.58162 8.04923L9.80131 11.2689"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.0985 8.04924C16.0985 12.4947 12.4947 16.0985 8.04924 16.0985C3.60377 16.0985 0 12.4947 0 8.04924C0 3.60377 3.60377 0 8.04924 0C12.4947 0 16.0985 3.60377 16.0985 8.04924Z"
            fill="#2BDA53"
          />
          <path
            d="M7.24414 4.82953L10.4638 8.04923L7.24414 11.2689"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
