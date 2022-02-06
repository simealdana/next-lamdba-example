/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env:{
    CAPY_CLOUDINARY_URL:'https://res.cloudinary.com/doa8qp6ca/image/upload/v1643841212/capybaras/'
  },
  images:{
    domains: ['res.cloudinary.com']
  }
}
