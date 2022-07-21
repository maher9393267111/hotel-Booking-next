/** @type {import('next').NextConfig} */



// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

module.exports = {
  env: {
      DB_LOCAL_URI: '',
      DB_URI: '',

      STRIPE_API_KEY: '',
      STRIPE_SECRET_KEY: '',

      STRIPE_WEBHOOK_SECRET: '',

      CLOUDINARY_CLOUD_NAME: 'maher9911133',
      CLOUDINARY_API_KEY: '442715196852148',
      CLOUDINARY_API_SECRET: 'zFL1FnOG0PD64fdyyVa-8g5cs1s',

      SMTP_HOST: "",
      SMTP_PORT: "",
      SMTP_USER: "",
      SMTP_PASSWORD: "",
      SMTP_FROM_EMAIL: "",
      SMTP_FROM_NAME: "",

      NEXTAUTH_URL: '',
  },
  images: {
      domains: ['res.cloudinary.com'],
  },
}