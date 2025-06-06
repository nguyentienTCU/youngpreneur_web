<!-- Spline.vue -->
<template>
  <InspiraSplineSize :parent-size-styles="parentSizeStyles" :debounce-time="50" v-bind="$attrs">
    <template #default>
      <canvas ref="canvasRef"
        class="spline-canvas"
        :style="canvasStyle" />
      <slot v-if="isLoading" />
    </template>
  </InspiraSplineSize>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Application, type SplineEventName } from "@splinetool/runtime";


const props = defineProps({
  scene: {
    type: String,
    required: true,
  },
  onLoad: Function,
  renderOnDemand: {
    type: Boolean,
    default: true,
  },
  style: Object,
});

let cleanUpFns: any[] = [];

const emit = defineEmits([
  "error",
  ...[
    "spline-mouse-down",
    "spline-mouse-up",
    "spline-mouse-hover",
    "spline-key-down",
    "spline-key-up",
    "spline-start",
    "spline-look-at",
    "spline-follow",
    "spline-scroll",
  ],
]);

const canvasRef = ref<HTMLCanvasElement | null>(null);
const isLoading = ref(true);
const splineApp = ref<Application | null>(null);

const parentSizeStyles = computed(() => ({
  overflow: "hidden",
  ...props.style,
}));

const canvasStyle = computed(() => ({
  display: isLoading.value ? "none" : "block",
  width: "100%",
  height: "100%",
}));

function eventHandler(name: SplineEventName, handler?: (e: any) => void) {
  if (!handler || !splineApp.value) return;
  const debouncedHandler = useDebounceFn(handler, 50, {
    maxWait: 100,
  });
  splineApp.value.addEventListener(name, debouncedHandler);
  return () => splineApp.value?.removeEventListener(name, debouncedHandler);
}

onMounted(async () => {
  if (!canvasRef.value) return;

  try {
    splineApp.value = new Application(canvasRef.value, {
      renderOnDemand: props.renderOnDemand,
    });

    await splineApp.value.load(props.scene);

    cleanUpFns = [
      eventHandler("mouseDown", (e: any) => emit("spline-mouse-down", e)),
      eventHandler("mouseUp", (e: any) => emit("spline-mouse-up", e)),
      eventHandler("mouseHover", (e: any) => emit("spline-mouse-hover", e)),
      eventHandler("keyDown", (e: any) => emit("spline-key-down", e)),
      eventHandler("keyUp", (e: any) => emit("spline-key-up", e)),
      eventHandler("start", (e: any) => emit("spline-start", e)),
      eventHandler("lookAt", (e: any) => emit("spline-look-at", e)),
      eventHandler("follow", (e: any) => emit("spline-follow", e)),
      eventHandler("scroll", (e: any) => emit("spline-scroll", e)),
    ].filter(Boolean);

    isLoading.value = false;
    props.onLoad?.(splineApp.value);
  } catch (err) {
    emit("error", err);
  }
});

onUnmounted(() => {
  cleanUpFns.forEach((fn) => fn?.());
  splineApp.value?.dispose();
});
</script>

<style scoped>
.spline-canvas {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
</style>

