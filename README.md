# Run localhost 
follow instuction on order-service/README.md

follow instuction on inventory-service/README.md

# Run by Docker container - Quick start
if you want to run by Docker, Moving to order-service foler configs/db.js 

config all file .env in all service/REAME.md 

comment line config mongo_URL in order-service/configs/db.js

then follow step 1 to run and test order-service, other service is not fisnished to test

Step 1:

docker network create ecommerce-net

docker volume create mongo-order-data

docker volume create mongo-inventory-data

docker-compose up --build

Order Service: http://localhost:3000

Inventory Service: http://localhost:4000
