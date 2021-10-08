FROM node:14
WORKDIR /app
COPY ./covid-test-result-fe/ .
RUN npm install
# COPY . .
CMD ["npm", "start"]