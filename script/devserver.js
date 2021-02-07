#!/usr/bin/env node

const esbuild = require('esbuild')
const browserifyAdapter = require('esbuild-plugin-browserify-adapter')
const envify = require('envify')
const l10nify = require('@offen/l10nify')

esbuild.serve({
  port: parseInt(process.env.PORT, 10),
  host: '0.0.0.0'
}, {
  entryPoints: ['./index.js'],
  outfile: './out/index.js',
  bundle: true,
  plugins: [browserifyAdapter(l10nify, [envify, {}])],
  define: {
    'process.env.NODE_ENV': '"development"'
  }
})
  .then(server => {
    console.log('Now listening on port %d', server.port)
    server.wait.then(e => {
      console.log('server terminated', e)
    })
  })
  .catch(function (err) {
    console.error(err)
    process.exit(1)
  })
