"use client";

import { QRCodeCanvas } from "qrcode.react";

export default function Home() {
  const url = "https://www.versetechnologies.org/";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Verse Technologies QR Code
      </h1>

      <div className="flex items-center justify-center bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <div className="flex items-center justify-center w-[240px] h-[240px]">
          <QRCodeCanvas
            value={url}
            size={200}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
            includeMargin={false} // disable outer margin
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>

      <p className="mt-6 text-gray-600 text-sm">
        Scan to visit <span className="font-medium">versetechnologies.org</span>
      </p>
    </div>
  );
}
