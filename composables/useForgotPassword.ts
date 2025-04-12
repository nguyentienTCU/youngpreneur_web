export const useForgotPassword = () => {
  const auth = useAuthStore();
  const toast = useToast();

  const formData = reactive({ email: "" });

  const isLoading = computed(() => auth.loading);

  const onSubmit = async () => {
    await auth.forgotPassword(formData.email);

    if (auth.err) {
      toast.add({
        title: "Error",
        description: auth.err.message,
        icon: "i-heroicons-x-circle",
      });
      throw new Error(auth.err.message);
    }

    return true;
  };

  return { formData, isLoading, forgotPasswordSchema, onSubmit };
};
