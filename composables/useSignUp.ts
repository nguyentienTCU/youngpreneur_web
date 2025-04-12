export const useSignUp = () => {
  const router = useRouter()
  const auth = useAuthStore()
  
  const formData = reactive({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const errorMessage = computed(() => auth.err?.message)
  const isLoading = computed(() => auth.loading)
  
  const onSubmit = async () => {
    if (await auth.register(formData)) router.push('/')
  }
  
  return { formData, errorMessage, isLoading, registerSchema, onSubmit }
} 