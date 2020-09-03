<template>
  <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
    <div
        v-if="enabled"
        class="my-sw-update-popup">
<!--      {{ message }}<br>-->
      <button @click="reload">{{ buttonText }}</button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

export default {
  components: { SWUpdatePopup }
}
</script>

<style>
.my-sw-update-popup {
  text-align: right;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  font-size: 15px;
  padding: 10px;
  border: 5px hidden transparent;
}

.my-sw-update-popup button {
  border: none;
  padding: 1em;
  outline: none;
  color: white;
  text-transform: uppercase;
  font-weight: 900;
  font-style: 1.2em;
  letter-spacing: 0.2em;
  position: relative;
  z-index: 1;
  cursor: pointer;
  background: none;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
}

.my-sw-update-popup button:before, .my-sw-update-popup button:after {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 10em;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: 105%;
  height: 105%;
  content: '';
  z-index: -2;
  background-size: 400% 400%;
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
}

.my-sw-update-popup button:before {
  -webkit-filter: blur(7px);
  filter: blur(7px);
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
  -webkit-animation: pulse 10s infinite ease;
  animation: pulse 10s infinite ease;
}

.my-sw-update-popup button:after {
  -webkit-filter: blur(0.3px);
  filter: blur(0.3px);
}

.my-sw-update-popup button:hover:before {
  width: 115%;
  height: 115%;
}
</style>