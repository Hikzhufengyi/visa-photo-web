import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #fbf4ea 0%, #f2dcb7 42%, #e5b16b 100%)",
          color: "#5d3213",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -120,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.32)"
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 120,
            bottom: -140,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "rgba(191,106,45,0.14)"
          }}
        />
        <div
          style={{
            width: "58%",
            padding: "72px 0 72px 72px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontSize: 26,
                fontWeight: 700
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: "#bf6a2d"
                }}
              />
              IDPhoto Pro
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 62,
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: -2
              }}
            >
              <span>Passport &amp; visa photos</span>
              <span>for iPhone</span>
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: 560,
                fontSize: 28,
                lineHeight: 1.45,
                color: "#744524"
              }}
            >
              <span>
                Official-size presets, on-device checks, and export-ready files
                for passport photos, visa photos, and common ID photos.
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              fontSize: 22,
              color: "#744524"
            }}
          >
            <span>Document presets</span>
            <span>On-device checks</span>
            <span>One-time purchase</span>
          </div>
        </div>
        <div
          style={{
            width: "42%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 72
          }}
        >
          <div
            style={{
              width: 290,
              height: 560,
              borderRadius: 46,
              background: "rgba(255,255,255,0.84)",
              boxShadow: "0 40px 100px rgba(95, 49, 14, 0.16)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "8px solid rgba(191,106,45,0.18)"
            }}
          >
            <div
              style={{
                width: 224,
                height: 448,
                borderRadius: 34,
                background:
                  "linear-gradient(180deg, #fff7ed 0%, #f1ddc5 52%, #f0c17d 100%)",
                display: "flex",
                flexDirection: "column",
                padding: 22,
                position: "relative"
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 8,
                  borderRadius: 999,
                  background: "#d7a06d",
                  alignSelf: "center",
                  marginBottom: 20
                }}
              />
              <div
                style={{
                  display: "flex",
                  width: 118,
                  height: 148,
                  borderRadius: 26,
                  background: "#fff",
                  alignSelf: "center",
                  position: "relative",
                  overflow: "hidden",
                  border: "4px solid rgba(191,106,45,0.2)"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 38,
                    top: 22,
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "#bf6a2d"
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 18,
                    top: 74,
                    width: 82,
                    height: 54,
                    borderRadius: 20,
                    background: "#f3d4a3"
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: 22,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12
                }}
              >
                {[148, 172, 156].map((width, index) => (
                  <div
                    key={index}
                    style={{
                      width,
                      height: 18,
                      borderRadius: 999,
                      background: index === 0 ? "#bf6a2d" : "#ddb489"
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  gap: 12
                }}
              >
                <div
                  style={{
                    flex: 1,
                    height: 42,
                    borderRadius: 999,
                    background: "#bf6a2d"
                  }}
                />
                <div
                  style={{
                    width: 66,
                    height: 42,
                    borderRadius: 999,
                    background: "#fff"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
