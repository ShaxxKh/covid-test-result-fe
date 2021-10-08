docker build -t covid-res-fe:latest .

docker run --name covid-fe -d -p 3000:3000 covid-res-fe:latest
