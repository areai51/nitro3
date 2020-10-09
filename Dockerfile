
# FROM node:alpine
# WORKDIR /usr/app
# COPY ./package*.json ./
# RUN yarn
# RUN nx run-many --target=export  --prod  --all

FROM nginx:alpine

COPY nginx/*.conf /etc/nginx/conf.d/

# COPY dist/apps*** /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
