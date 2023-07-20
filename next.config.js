/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["localhost"]
    },
    env:{
        baseAPI: "http://localhost:5000/api/",
        baseCDN: "http://localhost:5000"
    }
}

module.exports = nextConfig
