import { useState } from "react";
import { X, CheckCircle } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function WhatsappModal({ isOpen, onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  // Phone Validation
  const validatePhone = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length !== 10) {
      setPhoneError("Phone number must be 10 digits");
    } else {
      setPhoneError("");
    }
    setPhone(cleaned);
  };

  // Send message to backend (Business API)
        const sendWhatsApp = async () => {
        const response = await fetch("http://localhost:5000/api/send-whatsapp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            name,
            phone,
            email: "N/A",     // required for template ({{3}})
            service: "N/A",   // optional fallback
            message,
            }),
        });

        return response.json();
        };


  const handleSubmit = async () => {
    if (!name || !phone || !message || phoneError) return;

    setLoading(true);

    const result = await sendWhatsApp();
    setLoading(false);

    if (result.success) {
      setIsSubmitted(true);

      // Reset form
      setName("");
      setPhone("");
      setMessage("");
      setPhoneError("");
    }
  };

  const resetModal = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl relative animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        {/* Success State */}
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            <h2 className="text-2xl font-bold text-green-700 mb-2">
              Message Sent!
            </h2>

            <p className="text-gray-600 mb-6">
              Thank you! We will reach out to you shortly.
            </p>

            <button
              onClick={resetModal}
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Chat with Us on WhatsApp
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              />

              <div>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={phone}
                  onChange={(e) => validatePhone(e.target.value)}
                  maxLength={10}
                  className={`w-full p-3 border rounded-lg outline-none focus:ring-2 ${
                    phoneError
                      ? "border-red-500 focus:ring-red-400"
                      : "focus:ring-primary"
                  }`}
                />
                {phoneError && (
                  <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                )}
              </div>

              <textarea
                placeholder="Your Message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              ></textarea>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-[#1E3A8A] text-white py-3 rounded-lg font-semibold hover:bg-[#2E3A8A] transition disabled:bg-gray-400"
              >
                {loading ? "Sending..." : "Send on WhatsApp"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
