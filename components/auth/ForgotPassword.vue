<template>
  <div class="w-full max-w-md">
    <!-- Page Title -->
    <div class="flex justify-center mb-6">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900">Reset Password</h1>
    </div>

    <div v-if="!isSubmitted" class="mx-auto max-w-md">
      <p class="text-gray-600 mb-4 text-center">
        Enter your email address and we'll send you a link to reset your password.
      </p>
      
      <UForm 
        :state="formData"
        :schema="forgotPasswordSchema"
        @submit="handleSubmit"
        class="space-y-4 max-w-80 mx-auto"
      >
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <UFormGroup name="email" label="" label-class="hidden">
            <UInput
              v-model="formData.email"
              id="email"
              type="email"
              placeholder="Your email address"
              autocomplete="email"
              class="bg-white border-gray-300 text-gray-900 h-11 rounded-lg"
            />
          </UFormGroup>
        </div>
        
        <div class="flex justify-center">
          <UButton
            type="submit"
            :loading="isLoading"
            :disabled="isLoading"
            class="bg-gray-900 hover:bg-gray-800 text-white h-11 rounded-lg w-80 justify-center"
            size="md"
          >
            Send reset link
          </UButton>
        </div>
      </UForm>
    </div>
    
    <div v-else class="mx-auto max-w-md text-center">
      <UIcon name="i-heroicons-check-circle" class="h-12 w-12 text-green-500 mx-auto mb-4" />
      <h2 class="text-2xl font-bold mb-2">Email sent</h2>
      <p class="text-gray-600 mb-6">
        We've sent password reset instructions to {{ formData.email }}. Please check your inbox.
      </p>
      <UButton
        @click="isSubmitted = false"
        variant="ghost"
        color="gray"
        class="mr-2"
      >
        Try another email
      </UButton>
      <UButton
        @click="router.push('/sign-in')"
      >
        Back to Sign In
      </UButton>
    </div>
    
    <div v-if="!isSubmitted" class="flex justify-center mt-4 text-gray-600 text-sm max-w-80 mx-auto">
      <NuxtLink to="/sign-in" class="text-blue-600 hover:text-blue-500 hover:underline">
        Back to Sign In
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const { formData, isLoading, forgotPasswordSchema, onSubmit } = useForgotPassword()

const isSubmitted = ref(false)

const handleSubmit = async () => {
  await onSubmit()
  isSubmitted.value = true
}
</script> 