// next.config.js
module.exports = {
  // future: {
  //   webpack5: true,
  // },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
      };
    }

    return config;
  },
  // Add your Tailwind CSS config here
  // postcss: {
  //   plugins: [require('tailwindcss'), require('autoprefixer')],
  // },
};
