# build stage
FROM node:14-slim as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN NODE_ENV=prod npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]