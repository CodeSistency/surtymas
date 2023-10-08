/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     serverActions: true,
    //   },
    
    // webpack: (config, options) => {
    //   config.module.rules.push({
    //     test: /\.mdx/,
    //     use: [
    //       options.defaultLoaders.babel,
    //       {
    //         loader: '@mdx-js/loader',
    //         options: pluginOptions.options,
    //       },
    //     ],
    //   })
   
    //   return config
    // },
    experimental: {
      serverComponentsExternalPackages: ['@bcrypt'],
    },

    webpack: (config) => {
      config.externals = [...config.externals, 'bcrypt'];
       return config;
     },
      
  
      eslint: {
        ignoreDuringBuilds: true,
      },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
            },
        ],
    },
}

module.exports = nextConfig
