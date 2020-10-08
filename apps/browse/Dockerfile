######################################################################
FROM node:12-alpine as builder
######################################################################
WORKDIR /app
COPY . .
COPY ./package.json ./
RUN yarn
ARG NODE_OPTIONS="--max-old-space-size=1024"
ENV NODE_OPTIONS $NODE_OPTIONS
ENV NODE_ENV production
RUN yarn nx build browse --prod


# ----------------
FROM node:12-alpine
WORKDIR /app

COPY ./package.json ./
RUN yarn add next react react-dom
COPY --from=builder ./app/dist/apps/browse/ ./

EXPOSE 3002

CMD [ "yarn", "next", "start" ]
