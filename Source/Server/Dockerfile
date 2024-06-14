# Use a base image
FROM python:3.10-slim-buster

# Set the working directory
WORKDIR /app

# Copy the necessary files to the working directory
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Specify the command to run when the container starts
CMD [ "python", "main.py" ]