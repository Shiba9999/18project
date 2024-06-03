import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpCount, setOtpCount] = useState(0);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [timer, setTimer] = useState(0);
  const [warning, setWarning] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && otpCount > 0) {
      setResendDisabled(false);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleGetOtp = () => {
    if (email) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(otp);
      setOtpCount((prevCount) => prevCount + 1);
      setResendDisabled(true);
      setTimer(60);
      console.log(`Generated OTP: ${otp}`);
      setWarning("");
    } else {
      alert("Please enter an email");
    }
  };

  const handleResendOtp = () => {
    if (otpCount >= 3) {
      alert("Maximum OTP attempts reached.");
      return;
    }
    handleGetOtp();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      navigate("/home");
    } else {
      setWarning("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-balance"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-cyan-600 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleGetOtp();
              }}
              type="button"
              className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              disabled={otpCount >= 2}
            >
              Get OTP
            </button>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="otp"
                className="block text-sm font-medium leading-6 text-black"
              >
                OTP
              </label>
              <div className="text-sm">
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendDisabled || otpCount >= 3}
                  className={`font-semibold text-red-500 hover:text-red-400 ${
                    resendDisabled || otpCount >= 3
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Resend OTP
                </button>
              </div>
            </div>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Enter your OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset text-black sm:text-sm sm:leading-6"
              />
            </div>
            {timer > 0 && (
              <div className="mt-2 text-sm text-gray-600">
                You can resend OTP in {timer} seconds
              </div>
            )}
            {warning && (
              <div className="mt-2 text-sm text-red-500">{warning}</div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
