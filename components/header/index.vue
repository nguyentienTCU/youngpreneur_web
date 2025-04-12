<template>
  <div
    class="fixed inset-x-0 top-0 z-50 duration-200 group bg-gradient-to-b from-white lg:from-white/75 opacity-100 -translate-y-0">
    <div class="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-7xl relative">
      <nav class="flex items-center justify-between gap-4 duration-200 py-4">
        <div class="flex gap-4 items-center">
          <UButton color="white" variant="ghost" size="xl" icon="i-heroicons:bars-3-solid" class="lg:hidden" square
            padded @click="isOpenMenu = true" />
          <USlideover v-model="isOpenMenu" side="left">
            <div class="p-8 mb-4">
              <UButton color="gray" variant="ghost" size="sm" icon="i-heroicons-x-mark-20-solid"
                class="flex absolute end-5 top-5 z-10" square padded @click="isOpenMenu = false" />
              <div class="flex flex-1 flex-col gap-2">
                <NuxtLink class="text-slate-500 text-xl px-3 py-4 hover:text-slate-900"
                  :class="{ 'text-slate-900 underline': route.path === '/' }" to="/" @click="isOpenMenu = false">Home
                </NuxtLink>
                <NuxtLink v-for="item in navItems" :key="item.path"
                  class="text-slate-500 text-xl px-3 py-4 hover:text-slate-900"
                  :class="{ 'text-slate-900 underline': route.path === item.path }" :to="item.path"
                  @click="isOpenMenu = false">{{ item.name }}</NuxtLink>
              </div>
            </div>

          </USlideover>
          <NuxtLink to="/">
            <NuxtImg preload class="w-10 h-10" src="/logo.svg" />
          </NuxtLink>
        </div>


        <div class="ml-3 hidden flex-grow gap-2 lg:flex">
          <NuxtLink v-for="item in navItems" :key="item.path"
            class="text-slate-500 text-xl px-3 py-4 hover:text-slate-900"
            :class="{ 'text-slate-900 underline': route.path === item.path }" :to="item.path"
            @click="isOpenMenu = false">{{ item.name }}</NuxtLink>
        </div>
        <div class="flex items-center gap-3">
          <!-- User is logged out -->
          <template v-if="!auth.res || Object.keys(auth.res).length === 0">
            <NuxtLink to="/sign-in">
              <UButton class="rounded-full" size="lg">
                Login Now
              </UButton>
            </NuxtLink>
          </template>

          <!-- User is logged in -->
          <!-- <template v-else>
            <UDropdown>
              <UButton 
                variant="ghost" 
                color="gray" 
                class="flex items-center gap-2 rounded-full" 
                size="lg"
              >
                <UAvatar 
                  :src="auth.user?.firstName ? `https://ui-avatars.com/api/?name=${auth.user.firstName}+${auth.user.lastName}&background=random` : undefined" 
                  size="sm" 
                />
                <span>{{ auth.user?.displayName || 'User' }}</span>
                <UIcon name="i-heroicons-chevron-down-20-solid" class="w-5 h-5" />
              </UButton>
              
              <template #popper>
                <UList>
                  <UListGroup>
                    <UListItem to="/account">
                      <template #leading>
                        <UIcon name="i-heroicons-user-circle" />
                      </template>
                      Account
                    </UListItem>
                    <UListItem to="/settings">
                      <template #leading>
                        <UIcon name="i-heroicons-cog-6-tooth" />
                      </template>
                      Settings
                    </UListItem>
                  </UListGroup>
                  <UDivider />
                  <UListGroup>
                    <UListItem @click="handleLogout">
                      <template #leading>
                        <UIcon name="i-heroicons-arrow-right-on-rectangle" />
                      </template>
                      Sign out
                    </UListItem>
                  </UListGroup>
                </UList>
              </template>
            </UDropdown>
          </template> -->
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/stores/auth'
const route = useRoute();
const router = useRouter()
const auth = useAuthStore()

// Add console logging to debug auth state
console.log('Auth state:', auth)
console.log('Auth res:', auth.res)

const navItems = [
  {
    path: "/timeline",
    name: "Timeline",
  },
  {
    path: "/profiles",
    name: "Profiles",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/apply",
    name: "Apply",
  },
  {
    path: "/blog",
    name: "Blog",
  },

];

// async function handleLogout() {
//   await auth.logout()
//   router.push('/')
// }

const isOpenMenu = ref(false);
</script>
