package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	router := gin.Default()

	// Connect to MongoDB
	mongoURI := os.Getenv("MONGO_URI")
	client, err := mongo.Connect(nil, options.Client().ApplyURI(mongoURI))
	if err != nil {
		log.Fatalf("Failed to connect to MongoDB: %v", err)
	}
	defer client.Disconnect(nil)

	fmt.Println("Connected to MongoDB")

	// Sample route
	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Inventory Service is running"})
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "4000"
	}

	router.Run(fmt.Sprintf(":%s", port))
}
