export const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export const getImageOrientation = (url: string): Promise<"P" | "L"> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve(img.height > img.width ? "P" : "L");
    };
    img.src = url;
  });
};
