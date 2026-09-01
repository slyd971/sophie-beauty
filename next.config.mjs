/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF encoding in this sharp build hangs for many seconds per image
    // (confirmed: a 256px JPEG takes >30s to re-encode as AVIF vs ~40ms
    // for the WebP/JPEG path). Any visitor whose browser sends
    // "Accept: image/avif" — i.e. most real phones — would see the
    // gallery/photos stall on first load. WebP alone gives nearly the
    // same compression with none of that risk.
    formats: ["image/webp"],
  },
};

export default nextConfig;
