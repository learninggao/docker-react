FROM node:alpine as builder

WORKDIR '/home/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build


FROM nginx
# this is for elastic beanstalk, locally it does nothing
EXPOSE 80 
COPY --from=builder /home/app/build /usr/share/nginx/html
