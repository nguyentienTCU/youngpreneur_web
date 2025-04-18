import { Card, Typography, Button } from "ant-design-vue";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  UsergroupAddOutlined,
  DollarOutlined,
} from "@ant-design/icons-vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Card);
  nuxtApp.vueApp.use(Typography);
  nuxtApp.vueApp.use(Button);

  // Register icons globally
  nuxtApp.vueApp.component("CalendarOutlined", CalendarOutlined);
  nuxtApp.vueApp.component("ClockCircleOutlined", ClockCircleOutlined);
  nuxtApp.vueApp.component("UsergroupAddOutlined", UsergroupAddOutlined);
  nuxtApp.vueApp.component("DollarOutlined", DollarOutlined);
});
