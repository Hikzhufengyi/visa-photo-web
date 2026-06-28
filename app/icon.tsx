import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #f8fafc 0%, #dfe6ee 100%)"
        }}
      >
        <div
          style={{
            width: 360,
            height: 360,
            borderRadius: 104,
            background: "linear-gradient(180deg, #1b2430 0%, #0c121a 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 24px 80px rgba(15, 23, 34, 0.24)"
          }}
        >
          <div
            style={{
              width: 214,
              height: 264,
              borderRadius: 36,
              border: "14px solid #f8fafc",
              position: "relative",
              display: "flex",
              background: "rgba(248, 250, 252, 0.08)"
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 34,
                top: 36,
                width: 50,
                height: 50,
                borderRadius: "50%",
                background: "#f8fafc"
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 24,
                top: 106,
                width: 154,
                height: 98,
                borderRadius: "38px 38px 24px 24px",
                background: "#f8fafc"
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 24,
                top: 42,
                width: 50,
                height: 12,
                borderRadius: 999,
                background: "#c8d2df"
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 24,
                top: 76,
                width: 64,
                height: 12,
                borderRadius: 999,
                background: "#c8d2df"
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 24,
                top: 110,
                width: 56,
                height: 12,
                borderRadius: 999,
                background: "#c8d2df"
              }}
            />
          </div>
        </div>
      </div>
    ),
    size
  );
}
