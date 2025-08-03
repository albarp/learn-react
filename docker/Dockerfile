FROM node:22.15.0 AS build
WORKDIR /workspace
RUN npm i -g @nestjs/cli
RUN apt-get update && apt-get install -y jq && rm -rf /var/lib/apt/lists/*
RUN npm install -g task-master-ai