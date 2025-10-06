/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // 🔹 faz o next gerar /out
  images: { unoptimized: true }, // 🔹 evita loader do next/image no export
}

module.exports = nextConfig
