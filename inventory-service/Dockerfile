# Base image
FROM golang:1.20-alpine

# Set working directory
WORKDIR /app

# Copy Go Modules files
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy application code
COPY . ./

# Build the application
RUN go build -o main ./src

# Expose the port
EXPOSE 4000

# Run the application
CMD ["./main"]
