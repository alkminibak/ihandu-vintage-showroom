import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  loginSchema,
  registerSchema,
  type LoginFormData,
  type RegisterFormData,
} from "../schemas/auth.schemas";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { login, register } from "../services/auth.service";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register: registerLogin,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    setError: setRegisterError,
    formState: { errors: registerErrors, isSubmitting: isRegistering },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const handleLoginSubmit = async (data: LoginFormData) => {
    try {
      const authResponse = await login(data);

      localStorage.setItem("token", authResponse.token);
      localStorage.setItem("user", JSON.stringify(authResponse.user));

      navigate("/");
    } catch (error: unknown) {
      setError("root", {
        message: error instanceof Error ? error.message : "Failed to login",
      });
    }
  };

  const handleRegistrationSubmit = async (data: RegisterFormData) => {
    try {
      const registerResponse = await register(data);

      localStorage.setItem("token", registerResponse.token);
      localStorage.setItem("user", JSON.stringify(registerResponse.user));

      navigate("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setRegisterError("root", {
          message: error.message,
        });
      }
    }
  };
  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-16 py-16">
        <div className="grid grid-cols-2 gap-20">
          <section>
            <p className="text-xs uppercase tracking-widest text-text-muted">
              Welcome back!
            </p>

            <h1 className="mt-4 text-2xl font-light text-text">Login</h1>

            <form
              onSubmit={handleSubmit(handleLoginSubmit)}
              className="mt-10 max-w-md space-y-6"
            >
              <div>
                <label
                  htmlFor="login-email"
                  className="block text-xs text-text"
                >
                  Email
                </label>

                <input
                  id="login-email"
                  type="email"
                  autoComplete="email"
                  {...registerLogin("email")}
                  className="mt-2 w-full border border-accent bg-background px-4 py-2.5 text-text outline-none transition-colors focus:border-text"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-error">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="login-password"
                  className="block text-xs text-text"
                >
                  Password
                </label>

                <input
                  id="login-password"
                  type="password"
                  autoComplete="current-password"
                  {...registerLogin("password")}
                  className="mt-2 w-full border border-accent bg-background px-4 py-2.5 text-text outline-none transition-colors focus:border-text"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-error">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="border border-accent bg-accent-light px-8 py-2.5 text-sm text-text transition-colors hover:bg-accent"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>

              {errors.root && (
                <p className="text-sm text-error">{errors.root.message}</p>
              )}
            </form>
          </section>

          <section>
            <p className="text-xs uppercase tracking-widest text-text-muted">
              New to I Hand U?
            </p>

            <h2 className="mt-4 text-2xl font-light text-text">
              Create an account
            </h2>

            <form
              onSubmit={handleRegisterSubmit(handleRegistrationSubmit)}
              className="mt-10 max-w-md space-y-6"
            >
              <div>
                <label
                  htmlFor="register-firstname"
                  className="block text-xs text-text"
                >
                  First name
                </label>

                <input
                  id="register-firstname"
                  type="text"
                  autoComplete="given-name"
                  {...registerRegister("firstName")}
                  className="mt-2 w-full border border-accent bg-background px-4 py-2.5 text-text outline-none transition-colors focus:border-text"
                />
                {registerErrors.firstName && (
                  <p className="mt-1 text-sm text-error">
                    {registerErrors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="register-lastname"
                  className="block text-xs text-text"
                >
                  Last name
                </label>

                <input
                  id="register-lastname"
                  type="text"
                  autoComplete="family-name"
                  {...registerRegister("lastName")}
                  className="mt-2 w-full border border-accent bg-background px-4 py-2.5 text-text outline-none transition-colors focus:border-text"
                />
                {registerErrors.lastName && (
                  <p className="mt-1 text-sm text-error">
                    {registerErrors.lastName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="register-email"
                  className="block text-xs text-text"
                >
                  Email
                </label>

                <input
                  id="register-email"
                  type="email"
                  autoComplete="email"
                  {...registerRegister("email")}
                  className="mt-2 w-full border border-accent bg-background px-4 py-2.5 text-text outline-none transition-colors focus:border-text"
                />
                {registerErrors.email && (
                  <p className="mt-1 text-sm text-error">
                    {registerErrors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="register-password"
                  className="block text-xs text-text"
                >
                  Password
                </label>

                <input
                  id="register-password"
                  type="password"
                  autoComplete="new-password"
                  {...registerRegister("password")}
                  className="mt-2 w-full border border-accent bg-background px-4 py-2.5 text-text outline-none transition-colors focus:border-text"
                />
                {registerErrors.password && (
                  <p className="mt-1 text-sm text-error">
                    {registerErrors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isRegistering}
                className="border border-accent bg-accent-light px-8 py-2.5 text-sm text-text transition-colors hover:bg-accent"
              >
                {isRegistering ? "Creating account..." : "Create account"}
              </button>
              {registerErrors.root && (
                <p className="text-sm text-error">
                  {registerErrors.root.message}
                </p>
              )}
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default LoginPage;
