<template>
  <div class="wrapper" :style="{ padding: componentSetting.padding + 'px' }">
    <div class="logo" v-if="componentSetting.showTitle !== false">
      <svg
        :width="componentSetting.textFontSize / 96 * 105"
        :height="componentSetting.textFontSize / 96 * 140"
        viewBox="0 0 105 140"
        fill="none">
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="105"
          height="140">
          <path d="M0.183563 0H104.816V139.978H0.183563V0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75348 119.219H64.0647V49.2188H2.75348V119.219Z" fill="#D8DEE9"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M101.887 39.4917L91.0489 15.8138V8.20313C91.0489 3.6801 87.3431 0 82.7885 0H22.2115C17.6569 0 13.951 3.6801 13.951 8.20313V15.8138L3.11328 39.4917C0.547759 45.0957 0.183563 47.4742 0.183563 53.3203V131.797C0.183563 136.32 3.8894 140 8.44405 140H96.5559C101.111 140 104.816 136.32 104.816 131.797V53.3203C104.816 47.4742 104.452 45.0957 101.887 39.4917ZM22.2115 5.46875H74.9997C74.6943 6.32479 74.528 7.24464 74.528 8.20313V13.6719H19.458V8.20313C19.458 6.69484 20.6927 5.46875 22.2115 5.46875ZM5.69056 131.797V53.3203C5.69056 47.8928 6.00886 46.3805 8.12722 41.7546L18.4771 19.1406H73.0051L63.6902 39.4917C61.1247 45.0957 60.7605 47.4742 60.7605 53.3203V131.797C60.7605 132.755 60.9268 133.675 61.2323 134.531H8.44405C6.92522 134.531 5.69056 133.305 5.69056 131.797ZM99.3094 131.797C99.3094 133.305 98.0748 134.531 96.5559 134.531H69.021C67.5021 134.531 66.2675 133.305 66.2675 131.797V53.3203C66.2675 47.8928 66.5858 46.3805 68.7041 41.7546L79.7625 17.5926C79.9259 17.2565 80.0221 16.882 80.0335 16.4861C80.0335 16.4832 80.0335 16.4817 80.0335 16.4788C80.035 16.4547 80.035 16.4303 80.035 16.4063V8.20313C80.187 4.57443 85.3914 4.57734 85.542 8.20313V16.4063C85.542 16.7964 85.6264 17.1824 85.7887 17.5372L96.8728 41.7546C98.9911 46.3805 99.3094 47.8928 99.3094 53.3203V131.797Z" fill="#5E81AC"/>
        </g>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.6839 55.3754C40.7877 54.8996 39.7021 54.9525 38.8573 55.5121L32.1241 59.968L25.3909 55.5106C24.5461 54.9525 23.4605 54.8996 22.5644 55.3754C21.6693 55.8508 21.1101 56.7779 21.1101 57.7864V68.7239C21.2563 72.3511 26.4721 72.3497 26.6171 68.7239V62.8964L30.5969 65.5309C31.5217 66.1434 32.7266 66.1434 33.6514 65.5309L37.6311 62.8964V68.7239C37.7772 72.3511 42.9931 72.3497 43.1381 68.7239V57.7864C43.1381 56.7779 42.579 55.8508 41.6839 55.3754Z" fill="#434C5E"/>
        <path d="M50.9397 82.4869H13.6757C12.2057 82.4869 11.014 83.6703 11.014 85.1301C11.014 86.5899 12.2057 87.7734 13.6757 87.7734H50.9397C52.4097 87.7734 53.6014 86.5899 53.6014 85.1301C53.6014 83.6703 52.4097 82.4869 50.9397 82.4869Z" fill="#434C5E"/>
        <path d="M50.9397 95.2473H13.6757C12.2057 95.2473 11.014 96.4307 11.014 97.8906C11.014 99.3504 12.2057 100.534 13.6757 100.534H50.9397C52.4097 100.534 53.6014 99.3504 53.6014 97.8906C53.6014 96.4307 52.4097 95.2473 50.9397 95.2473Z" fill="#434C5E"/>
        <path d="M50.9397 108.008H13.6757C12.2057 108.008 11.014 109.191 11.014 110.651C11.014 112.111 12.2057 113.294 13.6757 113.294H50.9397C52.4097 113.294 53.6014 112.111 53.6014 110.651C53.6014 109.191 52.4097 108.008 50.9397 108.008Z" fill="#434C5E"/>
      </svg>
      <div
        class="title"
        :style="{
          fontSize: componentSetting.textFontSize * 1.3 + 'px',
          color: componentSetting.textColor
        }">
        Milkdown Editor
      </div>
    </div>
    <Milk
      ref="milkdown"
      :style="{
        fontFamily: componentSetting.fontFamily,
        pointerEvents: isLock ? 'auto': 'none',
        flex: 1
      }"
      :textColor="componentSetting.textColor"
      :fontSize="componentSetting.textFontSize"
      :enableTooltip="componentSetting.enableTooltip"
      :enableSlash="componentSetting.enableSlash"
      :enableHistory="componentSetting.enableHistory"
      :enablePrism="componentSetting.enablePrism"
      :enableClipboard="componentSetting.enableClipboard"
      :markdown="componentSetting.markdown"
      @change="onChange" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed, toRaw } from 'vue'
import { useStore } from 'vuex'
import Milk from './milkdown/Milk.vue'
const props = defineProps({
  componentSetting: {
    type: Object,
    required: true
  },
  element: {
    type: Object,
    required: true
  },
  isAction: {
    type: Boolean,
    default: false
  }
})

const store = useStore()
const isLock = computed(() => store.state.isLock)

const milkdown = ref()

// 如果使用数组监听会触发新旧值一样的回调，因为对象内存已改变
watch(() => props.componentSetting.enableTooltip, () => milkdown.value.update())
watch(() => props.componentSetting.enableSlash, () => milkdown.value.update())
watch(() => props.componentSetting.enablePrism, () => milkdown.value.update())
watch(() => props.componentSetting.enableHistory, () => milkdown.value.update())
watch(() => props.componentSetting.enableClipboard, () => milkdown.value.update())

const onChange = (md: string) => {
  // TODO: debounce
  const element = JSON.parse(JSON.stringify(toRaw(props.element)))
  if (props.isAction) {
    element.actionSetting.actionClickValue.componentSetting.markdown = md
    store.dispatch('updateActionElement', element)
  } else {
    element.componentSetting.markdown = md
  }
  store.dispatch('editComponent', element)
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.logo {
  display: flex;
  padding: 0 5px;
  align-items: center;
  .title {
    font-weight: bold;
    margin-left: 8px;
  }
}
</style>
