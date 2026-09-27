const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  // Lint roda no pre-commit (yarn lint); o Next 10 não lintava no build
  eslint: {
    ignoreDuringBuilds: true
  },
  compiler: {
    styledComponents: true
  }
})
