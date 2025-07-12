"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = { name: "", cardNumber: "", expiry: "", cvv: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!/^\d{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits";
      isValid = false;
    }
    if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      newErrors.expiry = "Expiry must be MM/YY";
      isValid = false;
    }
    if (!/^\d{3}$/.test(formData.cvv)) {
      newErrors.cvv = "CVV must be 3 digits";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handlePayment = () => {
    if (!validateForm()) {
      toast.error("❌ Please fix the form errors");
      return;
    }

    setLoading(true);
    toast.loading("Processing payment...");

    setTimeout(() => {
      toast.dismiss();
      setLoading(false);

      const isSuccess = Math.random() > 0.2;

      if (isSuccess) {
        toast.success("✅ Payment Successful!");
        setFormData({ name: "", cardNumber: "", expiry: "", cvv: "" });
      } else {
        toast.error("❌ Payment Failed. Please try again.");
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex items-center justify-center">
      <Card className="max-w-lg w-full shadow-2xl rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Payment Summary</h2>

          <div className="space-y-3 text-gray-700 mb-6">
            <div className="flex justify-between">
              <span>Teacher Subscription</span>
              <span>₹499.00</span>
            </div>
            <div className="flex justify-between">
              <span>GST (18%)</span>
              <span>₹89.82</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹588.82</span>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {["name", "cardNumber", "expiry", "cvv"].map((field) => (
              <div key={field}>
                <input
                  type="text"
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={
                    field === "name"
                      ? "Cardholder Name"
                      : field === "cardNumber"
                      ? "Card Number"
                      : field === "expiry"
                      ? "MM/YY"
                      : "CVV"
                  }
                  maxLength={field === "cvv" ? 3 : field === "cardNumber" ? 16 : undefined}
                  className="w-full px-4 py-3 border rounded-md text-base"
                />
                {errors[field as keyof typeof errors] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[field as keyof typeof errors]}
                  </p>
                )}
              </div>
            ))}
          </form>

          <Button
            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white text-base py-3"
            onClick={handlePayment}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Processing...
              </>
            ) : (
              "Pay ₹588.82"
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
