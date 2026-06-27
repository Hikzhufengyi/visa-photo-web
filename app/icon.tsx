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
          background:
            "linear-gradient(160deg, #f7ead6 0%, #f3d4a3 42%, #c97b3d 100%)"
        }}
      >
        <div
          style={{
            width: 360,
            height: 360,
            borderRadius: 92,
            background: "rgba(255,255,255,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 24px 80px rgba(95, 49, 14, 0.16)"
          }}
        >
          <div
            style={{
              width: 208,
              height: 250,
              borderRadius: 34,
              border: "12px solid #bf6a2d",
              position: "relative",
              display: "flex"
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 32,
                top: 34,
                width: 46,
                height: 46,
                borderRadius: "50%",
                background: "#bf6a2d"
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 22,
                top: 98,
                width: 144,
                height: 92,
                borderRadius: 28,
                background: "#f3d4a3"
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 22,
                top: 38,
                width: 48,
                height: 12,
                borderRadius: 999,
                background: "#bf6a2d"
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 22,
                top: 72,
                width: 62,
                height: 12,
                borderRadius: 999,
                background: "#d7a06d"
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 22,
                top: 106,
                width: 56,
                height: 12,
                borderRadius: 999,
                background: "#d7a06d"
              }}
            />
          </div>
        </div>
      </div>
    ),
    size
  );
}
