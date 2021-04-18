FROM node:15.14.0

ENV NODE_ENV=production

WORKDIR /usr/src/app
COPY src/package*.json ./
RUN apt-get update -yq \
    && npm install -g npm@latest \
    && npm ci --only=production \
    && cd .. \
    && apt-get clean -y \
    && mkdir dist

COPY src ./
COPY resources /usr/src/app/resources/

VOLUME /user/src/app/dist

CMD node index.js -o dist -i resources