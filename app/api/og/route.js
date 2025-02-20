import { ImageResponse } from "next/og";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") || "My Website";
  const image = searchParams.get("image") || "";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 32,
          fontWeight: "bold",
          color: "white",
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {image ? (
          <img src={image} alt={name} style={{ maxWidth: "100%", maxHeight: "100%" }} />
        ) : (
          <span>{name}</span>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}

export const runtime = "edge"; 