import Footer from "../components/Footer";
import Header from "../components/Header";

const LoginPage = () => {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-16 py-16">
        <div className="grid grid-cols-2 gap-20">
          <section>
            <p className="text-xs uppercase tracking-widest text-text-muted">
              Welcome back!
            </p>

            <h1 className="mt-4 text-2xl font-light text-text">
              Login
            </h1>

            <form className="mt-10 max-w-md space-y-6">
              <div>
                <label
                  htmlFor="login-email"
                  className="block text-xs text-text"
                >
                  Email
                </label>

                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full border border-accent bg-background px-4 py-2.5 text-text outline-none transition-colors focus:border-text"
                />
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
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="mt-2 w-full border border-accent bg-background px-4 py-2.5 text-text outline-none transition-colors focus:border-text"
                />
              </div>

              <button
                type="submit"
                className="border border-accent bg-accent-light px-8 py-2.5 text-sm text-text transition-colors hover:bg-accent"
              >
                Login
              </button>
            </form>
          </section>

          <section>
            <p className="text-xs uppercase tracking-widest text-text-muted">
              New to I Hand U?
            </p>

            <h2 className="mt-4 text-2xl font-light text-text">
              Create an account
            </h2>

            <form className="mt-10 max-w-md space-y-6">
              <div>
                <label
                  htmlFor="register-username"
                  className="block text-xs text-text"
                >
                  Username
                </label>

                <input
                  id="register-username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  className="mt-2 w-full border border-accent bg-background px-4 py-2.5 text-text outline-none transition-colors focus:border-text"
                />
              </div>

              <div>
                <label
                  htmlFor="register-firstname"
                  className="block text-xs text-text"
                >
                  First name
                </label>

                <input
                  id="register-firstname"
                  name="firstname"
                  type="text"
                  autoComplete="given-name"
                  className="mt-2 w-full border border-accent bg-background px-4 py-2.5 text-text outline-none transition-colors focus:border-text"
                />
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
                  name="lastname"
                  type="text"
                  autoComplete="family-name"
                  className="mt-2 w-full border border-accent bg-background px-4 py-2.5 text-text outline-none transition-colors focus:border-text"
                />
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
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full border border-accent bg-background px-4 py-2.5 text-text outline-none transition-colors focus:border-text"
                />
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
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  className="mt-2 w-full border border-accent bg-background px-4 py-2.5 text-text outline-none transition-colors focus:border-text"
                />
              </div>

              <button
                type="submit"
                className="border border-accent bg-accent-light px-8 py-2.5 text-sm text-text transition-colors hover:bg-accent"
              >
                Create account
              </button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default LoginPage;