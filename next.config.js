/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env:{
    CAPY_CLOUDINARY_URL:'/img/capybaras/'
  },
  images:{
    domains: ['res.cloudinary.com']
  }
}
