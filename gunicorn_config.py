# gunicorn_config.py
bind = "0.0.0.0:3000"  # Host and port for the server
workers = 1  # Number of Gunicorn worker processes (adjust as needed)
# timeout = 60  # Request timeout in seconds
