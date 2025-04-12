import type { Account } from "../type/auth";

export const useAuthStore = defineStore("auth", () => {
  const res = reactive<Account>({});
  const err = ref<any>(null);
  const loading = ref<boolean>(false);

  // Helper function to handle async operations
  const execAuthOp = async (operation: () => Promise<void>) => {
    loading.value = true;
    err.value = null;
    try {
      await operation();
    } catch (error: any) {
      err.value = error;
    } finally {
      loading.value = false;
    }
  };

  // Clear user data
  const clearUserData = () => {
    Object.keys(res).forEach((key) => (res[key as keyof Account] = undefined));
  };

  // Load user data from token
  const load = async () =>
    execAuthOp(async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));

      const token = localStorage.getItem("auth_token");
      if (token) {
        // Placeholder for token-based authentication
        res.accountId = "";
        res.firstName = "";
        res.lastName = "";
        res.displayName = "";
        res.email = "";
        res.avatar = "";
      }
      return;
    });

  // Authenticate user
  const signIn = async (email: string, password: string) =>
    execAuthOp(async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Simulate successful authentication
      const token = "example-auth-token";

      // Set user data
      res.accountId = "user-id";
      res.firstName = "First";
      res.lastName = "Last";
      res.displayName = "First Last";
      res.email = email;
      res.avatar = `https://ui-avatars.com/api/?name=First+Last`;

      localStorage.setItem("auth_token", token);
    });

  // Register new user
  const register = async (userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) =>
    execAuthOp(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Set user data
      res.accountId = "user-" + Math.floor(Math.random() * 1000);
      res.firstName = userData.firstName;
      res.lastName = userData.lastName;
      res.displayName = `${userData.firstName} ${userData.lastName}`;
      res.email = userData.email;
      res.avatar = `https://ui-avatars.com/api/?name=${userData.firstName}+${userData.lastName}`;

      localStorage.setItem("auth_token", "example-auth-token");
    });

  // Send password reset email
  const forgotPassword = async (email: string) =>
    execAuthOp(async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
    });

  // Clear auth state
  const reset = () => {
    clearUserData();
    err.value = null;
    loading.value = false;
    localStorage.removeItem("auth_token");
  };

  return { res, err, loading, load, signIn, register, forgotPassword, reset };
});
