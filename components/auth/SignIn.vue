<template>
  <div class="w-full max-w-md">
    <!-- Logo -->
    <div class="flex justify-center mb-6">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900">Sign In</h1>
    </div>

    <div class="space-y-2">
      <!-- Social sign-in buttons -->
      <div class="flex justify-center">
        <UButton
          size="md"
          variant="ghost"
          color="gray"
          class="bg-white hover:bg-gray-100 rounded-lg h-11 flex items-center justify-center border border-gray-200 w-80"
        >
          <span class="flex items-center">
            <UIcon name="i-simple-icons-x" class="w-4 h-4 mr-3" />
            Sign in with X
          </span>
        </UButton>
      </div>

      <div class="flex justify-center">
        <UButton
          size="md"
          variant="ghost"
          color="gray"
          class="bg-white hover:bg-gray-100 rounded-lg h-11 flex items-center justify-center border border-gray-200 w-80"
        >
          <span class="flex items-center">
            <UIcon name="i-simple-icons-google" class="w-4 h-4 mr-3" />
            Sign in with Google
          </span>
        </UButton>
      </div>

      <div class="flex justify-center">
        <UButton
          size="md"
          variant="ghost"
          color="gray"
          class="bg-white hover:bg-gray-100 rounded-lg h-11 flex items-center justify-center border border-gray-200 w-80"
        >
          <span class="flex items-center">
            <UIcon name="i-simple-icons-apple" class="w-4 h-4 mr-3" />
            Sign in with Apple
          </span>
        </UButton>
      </div>

      <div class="relative mt-4 mb-3 max-w-80 mx-auto">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="bg-gray-50 px-4 text-gray-500">or</span>
        </div>
      </div>

      <!-- Email/Password form -->
      <UForm
        :state="formData"
        :schema="loginSchema"
        @submit="onSubmit"
        class="space-y-2 max-w-80 mx-auto"
      >
        <!-- Email field -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <UFormGroup name="email" label="" label-class="hidden">
            <UInput
              v-model="formData.email"
              id="email"
              type="email"
              placeholder="Email address"
              autocomplete="email"
              class="bg-white border-gray-300 text-gray-900 h-11 rounded-lg"
            />
          </UFormGroup>
        </div>

        <!-- Password field -->
        <div>
          <div class="flex items-center justify-between mb-1">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <UButton to="/forgot-password" variant="link" color="blue" size="sm">
              Forgot password?
            </UButton>
          </div>
          <UFormGroup name="password" label="" label-class="hidden">
            <UInput
              v-model="formData.password"
              id="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password"
              autocomplete="current-password"
              class="bg-white border-gray-300 text-gray-900 h-11 rounded-lg"
            >
              <template #trailing>
                <button 
                  type="button"
                  class="flex items-center justify-center p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none"
                  @click.prevent="toggleShowPassword"
                >
                  <UIcon :name="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'" class="w-5 h-5" />
                </button>
              </template>
            </UInput>
          </UFormGroup>
        </div>

        <!-- Submit button -->
        <div class="flex justify-center mt-3">
          <UButton
            type="submit"
            :loading="isLoading"
            :disabled="isLoading"
            class="bg-gray-900 hover:bg-gray-800 text-white h-11 rounded-lg w-60 justify-center mx-auto"
            size="md"
          >
            Sign in
          </UButton>
        </div>
      </UForm>

      <UAlert
        v-if="errorMessage"
        type="danger"
        :title="errorMessage"
        variant="soft"
        class="mt-3 max-w-80 mx-auto"
      />
    </div>

    <div class="flex justify-between mt-4 text-gray-600 text-sm max-w-80 mx-auto">
      <span>Don't have an account?</span>
      <NuxtLink to="/sign-up" class="text-blue-600 hover:text-blue-500 hover:underline">
        Sign up
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { formData, errorMessage, isLoading, loginSchema, onSubmit } = useSignIn()

const showPassword = ref(false)
const toggleShowPassword = () => showPassword.value = !showPassword.value
</script> 