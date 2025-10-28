'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout/Layout";
import Subscribe from '@/components/sections/home2/Subscribe';
import { useAuth } from "@/components/dashboard/auth-context";

export default function Login_Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login, user } = useAuth();
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email || !password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      const success = await login(email, password);
      if (success) {
        router.push("/dashboard");
      } else {
        setError("Invalid credentials or insufficient permissions");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Login">
        <section className="sign-section pt_110 pb_120">
          <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
          <div className="auto-container">
            <div className="form-inner">
              <form onSubmit={handleSubmit}>
                {/* Email Field */}
                <div className="form-group">
                  <label>Email <span>*</span></label>
                  <input
                    type="email"
                    name="email"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="form-control"
                  />
                </div>

                {/* Password Field with Toggle */}
                <div className="form-group position-relative">
                  <label>Password <span>*</span></label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                    className="form-control pe-5"
                  />
                  <button
                    type="button"
                    className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-muted"
                    style={{ zIndex: 10 }}
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>

                {/* Error Alert */}
                {error && (
                  <div className="alert alert-danger small py-2 px-3">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <div className="form-group message-btn">
                  <button
                    type="submit"
                    className="theme-btn btn-one w-100 d-flex align-items-center justify-content-center"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Signing in...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-sign-in-alt me-2"></i>
                        Log In
                      </>
                    )}
                  </button>
                </div>

                {/* Divider */}
                <span className="text d-block text-center my-3">or</span>

                {/* Social Login (Optional - keep as is or disable) */}
                <ul className="social-links clearfix">
                  <li>
                    <Link href="#">
                      <img src="assets/images/icons/icon-25.png" alt="" className="me-2" />
                      Continue with Google
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <img src="assets/images/icons/icon-26.png" alt="" className="me-2" />
                      Continue with Facebook
                    </Link>
                  </li>
                </ul>
              </form>

              {/* Extra Options */}
              <div className="other-option d-flex justify-content-between align-items-center mt-3">
                <div className="check-box">
                  <input className="check" type="checkbox" id="checkbox1" />
                  <label htmlFor="checkbox1">Remember me</label>
                </div>
                <button className="forgot-password btn btn-link p-0 text-decoration-none">
                  Forget password?
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="lower-text centred mt-3">
                <p>
                  Not registered yet? <Link href="/signup">Create an Account</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Subscribe />
      </Layout>
    </div>
  );
}