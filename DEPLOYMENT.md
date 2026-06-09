# Render deployment for backend
# 1. Go to https://render.com and sign up/login
# 2. Click "New +" and select "Web Service"
# 3. Connect your GitHub repository
# 4. Configure the service:
#    - Name: fracture-detector-backend
#    - Region: Choose closest to you
#    - Branch: main
#    - Root Directory: backend
#    - Build Command: pip install -r requirements.txt
#    - Start Command: gunicorn --bind :$PORT app:app
# 5. Click "Create Web Service"

# After deployment, copy the deployed URL and update your frontend .env file:
# VITE_BACKEND_URL=https://your-service.onrender.com
