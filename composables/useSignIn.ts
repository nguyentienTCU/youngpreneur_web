export const useSignIn = () => {
  const router = useRouter()
  const auth = useAuthStore()
  
  const formData = reactive({ email: '', password: '' })
  
  const errorMessage = computed(() => auth.err?.message)
  const isLoading = computed(() => auth.loading)
  
  const onSubmit = async () => {
    if (await auth.signIn(formData.email, formData.password)) router.push('/')
  }
  
  return { formData, errorMessage, isLoading, loginSchema, onSubmit }
} 