module.exports = {
  apps: [
    {
      name: 'dalpum-homepage',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 12300
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log'
    }
  ]
};