<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 max-w-2xl">

      <h2 class="text-4xl font-bold text-center mb-6">{{ t('apply.title') }}</h2>
      <p class="text-gray-600 text-center mb-12">
        {{ t('apply.description') }}
      </p>

      <!-- Success Message -->
      <UAlert v-if="isSuccess" type="success" :title="successMessage" class="mb-6" />

      <!-- Error Message -->
      <UAlert v-if="error" type="error" :title="error" class="mb-6" />

      <!-- Application Form -->
      <UForm :state="formData" @submit="handleSubmit" class="space-y-6">
        <!-- Personal Information -->
        <UCard :title="t('apply.title1')">
          <div class="grid md:grid-cols-2 gap-4">
            <UFormGroup :label="t('apply.label1,1')" name="firstName" required>
              <UInput v-model="formData.firstName" />
            </UFormGroup>
            <UFormGroup :label="t('apply.label1,2')" name="lastName" required>
              <UInput v-model="formData.lastName" />
            </UFormGroup>
          </div>
          <UFormGroup :label="t('apply.label1,3')" name="email" required>
            <UInput v-model="formData.email" type="email" />
          </UFormGroup>
          <UFormGroup :label="t('apply.label1,4')" name="phone" required>
            <UInput v-model="formData.phone" type="tel" />
          </UFormGroup>
        </UCard>

        <!-- Education & Experience -->
        <UCard :title="t('apply.title2')">
          <UFormGroup :label="t('apply.label2,1')" name="education" required>
            <UInput v-model="formData.education" />
          </UFormGroup>
          <UFormGroup :label="t('apply.label2,2')" name="major" required>
            <UInput v-model="formData.major" />
          </UFormGroup>
          <UFormGroup :label="t('apply.label2,3')" name="experience" required>
            <UTextarea v-model="formData.experience" :rows="4" />
          </UFormGroup>
        </UCard>

        <!-- Interests & Goals -->
        <UCard :title="t('apply.title3')">
          <UFormGroup :label="t('apply.label3,1')" name="interests" required>
            <div class="grid grid-cols-2 gap-4">
              <UCheckbox v-for="interest in interests" :key="interest.value" v-model="formData.interests"
                :value="interest.value" :label="interest.label" />
            </div>
          </UFormGroup>
          <UFormGroup :label="t('apply.label3,6')" name="goals" required>
            <UTextarea v-model="formData.goals" :rows="4" />
          </UFormGroup>
        </UCard>

        <!-- Resume Upload -->
        <UCard :title="t('apply.title4')">
          <UFormGroup :label="t('apply.label4,1')" name="resume" required>
            <UInput type="file" accept=".pdf" @change="handleFileUpload" />
            <p class="text-sm text-gray-500 mt-2">{{ t('apply.label4,2') }}</p>
          </UFormGroup>
        </UCard>

        <!-- Submit Button -->
        <div class="flex justify-end">
          <UButton type="submit" color="primary" :loading="isSubmitting" :disabled="isSubmitting">
            {{ isSubmitting ? t('apply.submitting') : t('apply.button') }}
          </UButton>
        </div>
      </UForm>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref, reactive } from 'vue';

const { t } = useI18n();

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  education: '',
  major: '',
  experience: '',
  interests: [],
  goals: '',
  resume: null
});

const formRules = {
  firstName: [{ required: true, message: t('apply.firstNameRequired') }],
  lastName: [{ required: true, message: t('apply.lastNameRequired') }],
  email: [
    { required: true, message: t('apply.emailRequired') },
    { type: 'email', message: t('apply.invalidEmail') }
  ],
  phone: [{ required: true, message: t('apply.phoneRequired') }],
  education: [{ required: true, message: t('apply.educationRequired') }],
  major: [{ required: true, message: t('apply.majorRequired') }],
  experience: [{ required: true, message: t('apply.experienceRequired') }],
  interests: [{ required: true, message: t('apply.interestsRequired') }],
  goals: [{ required: true, message: t('apply.goalsRequired') }],
  resume: [{ required: true, message: t('apply.resumeRequired') }]
};

const isSubmitting = ref(false);
const isSuccess = ref(false);
const error = ref('');

const interests = [
  { value: 'technology', label: t('apply.label3,2') },
  { value: 'marketing', label: t('apply.label3,3') },
  { value: 'finance', label: t('apply.label3,4') },
  { value: 'social impact', label: t('apply.label3,5') }
]

const successMessage = t('apply.success')

const handleFileUpload = (event) => {
  console.log("check here", event);

  // The event is a FileList object, get the first file
  const file = event[0];

  if (!file) {
    error.value = t('apply.fileUploadError');
    return;
  }

  console.log("File object:", file);

  // Validate file type (only allow PDFs)
  if (!file.type || !file.type.includes('pdf')) {
    error.value = t('apply.fileTypeError');
    return;
  }

  // Validate file size (max 5MB)
  if (!file.size || file.size > 5 * 1024 * 1024) {
    error.value = t('apply.fileSizeError');
    return;
  }

  formData.resume = file;
  error.value = '';
};

const handleSubmit = async () => {
  try {
    // Validate all required fields
    for (const [key, value] of Object.entries(formData)) {
      if (formRules[key]?.[0]?.required) {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          error.value = formRules[key][0].message;
          return;
        }
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      error.value = t('apply.invalidEmail');
      return;
    }

    isSubmitting.value = true;
    error.value = '';
    isSuccess.value = false;

    let resumeUrl = '';

    // Handle file upload if a file was selected
    if (formData.resume) {
      const formDataFile = new FormData();
      formDataFile.append('file', formData.resume);

      // Upload file using Nuxt server route
      const response = await $fetch('/api/upload', {
        method: 'POST',
        body: formDataFile
      });

      if (response.error) {
        throw new Error(response.error);
      }

      resumeUrl = response.url;
    }

    // Prepare the data for Sheety
    const sheetyData = {
      info: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        education: formData.education,
        major: formData.major,
        experience: formData.experience,
        interests: formData.interests.join(', '),
        goals: formData.goals,
        resume: resumeUrl
      }
    };

    const sheetyResponse = await $fetch('https://api.sheety.co/8235ce3eb8c996ac80dc9334fc264d38/youngpreneurApplicant/info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sheetyData)
    });

    isSuccess.value = true;

    // Reset form
    Object.keys(formData).forEach(key => {
      if (Array.isArray(formData[key])) {
        formData[key] = [];
      } else {
        formData[key] = '';
      }
    });
  } catch (err) {
    error.value = t('apply.error')
    console.error('Error:', err.message);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.container {
  max-width: 42rem;
}
</style>
