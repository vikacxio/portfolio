FROM node

WORKDIR /myportfolio

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm","start"]