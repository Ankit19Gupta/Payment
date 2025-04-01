"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Home = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal, setPostal] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirity, setExpirity] = useState("");
  const [cvc, setCvc] = useState("");
  const [zoomLevel, setZoomLevel] = useState(1);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        const newZoom = Math.min(Math.max(zoomLevel + delta, 0.5), 2);
        setZoomOrigin({ x: e.clientX, y: e.clientY });
        setZoomLevel(newZoom);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [zoomLevel]);

  const zoomStyles = {
    transform: `scale(${zoomLevel})`,
    transformOrigin: `${zoomOrigin.x}px ${zoomOrigin.y}px`,
    transition: "transform 0.1s ease-out",
  };

  return (
    <div
      className="min-h-screen w-full bg-[#12372A] py-5 px-4 overflow-hidden"
      style={zoomLevel !== 1 ? zoomStyles : {}}
    >
      <h1 className="text-white font-bold text-3xl md:text-4xl text-center py-5">
        Card payment <br />
        Checkout form
      </h1>

      <div className="bg-white flex flex-col lg:flex-row justify-between items-center max-w-4xl mx-auto rounded-lg p-4 md:p-6 gap-8">
        {/* left side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center flex-col">
          <Image src={"/assets/logo.png"} height={200} width={200} alt="logo" />
          <h3 className="text-3xl font-medium text-gray-600">
            Payment gateway
          </h3>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2">
          <p className="font-bold text-lg mb-6">
            Complete registration payment
          </p>
          <form className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-4">Personal details</h4>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-sm">Address line</label>
                  <input
                    type="text"
                    placeholder="P.o.Box 1223"
                    className="w-full outline-none border px-3 py-2 rounded text-sm"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-sm">City</label>
                  <input
                    type="text"
                    placeholder="Arusha"
                    className="w-full outline-none border px-3 py-2 rounded text-sm"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-sm">State</label>
                <input
                  type="text"
                  placeholder="Arusha, Tanzania"
                  className="w-full outline-none border px-3 py-2 rounded text-sm"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-sm">Postal Code</label>
                <input
                  type="text"
                  placeholder="9090"
                  className="w-full outline-none border px-3 py-2 rounded text-sm"
                  value={postal}
                  onChange={(e) => setPostal(e.target.value)}
                />
              </div>
            </div>

            <div>
              <h1 className="text-xl font-bold mb-4">Payment Methods</h1>
              <div className="flex flex-wrap gap-3 my-2">
                <div className="h-10 w-16 rounded bg-slate-600 text-white flex justify-center items-center cursor-pointer hover:bg-slate-700 transition">
                  Visa
                </div>
                <div className="h-10 w-16 rounded bg-slate-600 text-white flex justify-center items-center cursor-pointer hover:bg-slate-700 transition">
                  Stripe
                </div>
                <div className="h-10 w-16 rounded bg-slate-600 text-white flex justify-center items-center cursor-pointer hover:bg-slate-700 transition">
                  Gpay
                </div>
                <div className="h-10 w-16 rounded bg-slate-600 text-white flex justify-center items-center cursor-pointer hover:bg-slate-700 transition">
                  Rupay
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-xl font-bold">Card Holder</h1>
              <div className="flex flex-col gap-1">
                <label className="text-sm">Cardholder's Name</label>
                <input
                  type="text"
                  placeholder="seen on your card"
                  className="w-full outline-none border px-3 py-2 rounded text-sm"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm">Card Number</label>
                <input
                  type="text"
                  placeholder="seen on your card"
                  className="w-full outline-none border px-3 py-2 rounded text-sm"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-sm">Expirity</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full outline-none border px-3 py-2 rounded text-sm"
                    value={expirity}
                    onChange={(e) => setExpirity(e.target.value)}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-sm">CVC</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full outline-none border px-3 py-2 rounded text-sm"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {zoomLevel !== 1 && (
        <div className="fixed bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
          Zoom: {Math.round(zoomLevel * 100)}%
        </div>
      )}
    </div>
  );
};

export default Home;
