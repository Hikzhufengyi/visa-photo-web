"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

type DownloadQrProps = {
  url: string;
  alt: string;
};

export function DownloadQr({ url, alt }: DownloadQrProps) {
  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    let active = true;

    void QRCode.toDataURL(url, {
      width: 280,
      margin: 1,
      color: {
        dark: "#23170f",
        light: "#FFF8F0"
      }
    }).then((nextUrl) => {
      if (active) {
        setDataUrl(nextUrl);
      }
    });

    return () => {
      active = false;
    };
  }, [url]);

  if (!dataUrl) {
    return <div className="qr-placeholder">Generating QR...</div>;
  }

  return <img className="qr-image" src={dataUrl} alt={alt} />;
}
