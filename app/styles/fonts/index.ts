import localFont from "next/font/local";

const ralewayFont = localFont({
  src: [
    {
      path: "./Raleway/Raleway-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Raleway/Raleway-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Raleway/Raleway-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Raleway/Raleway-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export { ralewayFont };
