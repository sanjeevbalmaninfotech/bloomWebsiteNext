"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Phone, Mail, Calendar, MessageSquare, Send, User, CheckCircle, AlertCircle } from "lucide-react";
import { apiPost } from '@/app/utils/axiosApis/api';
import { apiUrlsEndpoints } from "../config/apiRoutes";
import { envConfig } from "../config/envConfig";
import Navbar from "../components/Navbar";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    telephone: "",
    email: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    telephone: "",
    email: "",
    date: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    
    // Clear submit status
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  }

  function validateForm() {
    const newErrors = {
      name: "",
      telephone: "",
      email: "",
      date: "",
    };

    let isValid = true;

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
      isValid = false;
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    // Phone validation
    if (!form.telephone.trim()) {
      newErrors.telephone = "Phone number is required";
      isValid = false;
    } else if (!/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/.test(form.telephone)) {
      newErrors.telephone = "Please enter a valid phone number";
      isValid = false;
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Date validation (optional but if provided should be valid)
    if (form.date) {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.date = "Please select a future date";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
console.log(`${envConfig.API_BASE_URL}`, " = = = = = = = =",process.env.NEXT_PUBLIC_API_BASE_URL);
    try {
      const response = await apiPost(
      `${envConfig.API_BASE_URL}${apiUrlsEndpoints.registerYourInterests}`,
        {
          fullName: form.name,
          phone: form.telephone,
          email: form.email,
          preferredDate: form.date || null,
          message: form.message || "",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setSubmitStatus({
        type: "success",
        message: "Registration successful! We will contact you soon.",
      });

      // Reset form
      setForm({
        name: "",
        telephone: "",
        email: "",
        date: "",
        message: "",
      });
    } catch (error: unknown) {
      console.error("Registration error:", error);
      let errorMessage = "Registration failed. Please try again.";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      }
      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Images Section */}
          <div className="hidden lg:block space-y-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
                alt="Modern hospital facility"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  World-Class Care
                </h3>
                <p className="text-gray-600">
                  Compassionate healthcare for you and your family
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80"
                alt="Medical team"
                className="rounded-xl shadow-lg h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&q=80"
                alt="Patient care"
                className="rounded-xl shadow-lg h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Side - Form Section */}
          <div>
            {/* Mobile Image */}
            <div className="lg:hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
                alt="Hospital facility"
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
            </div>

            {/* Header */}
            <div className="mb-8">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Available 24/7
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
                Register
              </h1>
              <p className="text-gray-600 text-lg">
                Schedule a consultation with our expert medical team
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-100">
              {/* Success/Error Message */}
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <p
                    className={`text-sm font-medium ${
                      submitStatus.type === "success"
                        ? "text-green-800"
                        : "text-red-800"
                    }`}
                  >
                    {submitStatus.message}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 pl-11 border-2 rounded-lg focus:ring-4 transition-all outline-none ${
                        errors.name
                          ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                          : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                      }`}
                    />
                    <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                      errors.name ? "text-red-400" : "text-gray-400 group-focus-within:text-blue-500"
                    }`} />
                  </div>
                  {errors.name && (
                    <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Telephone & Email - Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="telephone"
                        value={form.telephone}
                        onChange={handleChange}
                        placeholder="Your phone"
                        className={`w-full px-4 py-3 pl-11 border-2 rounded-lg focus:ring-4 transition-all outline-none ${
                          errors.telephone
                            ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                            : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                        }`}
                      />
                      <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                        errors.telephone ? "text-red-400" : "text-gray-400 group-focus-within:text-blue-500"
                      }`} />
                    </div>
                    {errors.telephone && (
                      <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.telephone}
                      </p>
                    )}
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className={`w-full px-4 py-3 pl-11 border-2 rounded-lg focus:ring-4 transition-all outline-none ${
                          errors.email
                            ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                            : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                        }`}
                      />
                      <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                        errors.email ? "text-red-400" : "text-gray-400 group-focus-within:text-blue-500"
                      }`} />
                    </div>
                    {errors.email && (
                      <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Date Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 pl-11 border-2 rounded-lg focus:ring-4 transition-all outline-none ${
                        errors.date
                          ? "border-red-300 focus:border-red-500 focus:ring-red-100"
                          : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                      }`}
                    />
                    <Calendar className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                      errors.date ? "text-red-400" : "text-gray-400 group-focus-within:text-blue-500"
                    }`} />
                  </div>
                  {errors.date && (
                    <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.date}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message / Enquiry
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your health concerns..."
                      className="w-full px-4 py-3 pl-11 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none"
                    />
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Info Cards */}
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-xs text-gray-600">Emergency Care</div>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-teal-600">50+</div>
                    <div className="text-xs text-gray-600">Expert Doctors</div>
                  </div>
                </div>
              </form>
            </div>

            {/* Footer Note */}
            <p className="text-center text-sm text-gray-500 mt-6">
              🔒 Your information is secure and confidential
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}