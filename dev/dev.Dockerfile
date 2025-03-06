FROM golang:1.22 AS go

FROM node:18 AS node

COPY --from=go /usr/local/go /usr/local/go
ENV GOPATH /go
ENV CGO_ENABLED=0
ENV PATH $GOPATH/bin:/usr/local/go/bin:$PATH

# Install PNPM
RUN npm install -g pnpm

# Install Atlas
RUN curl -sSf https://atlasgo.sh | sh

WORKDIR /app
CMD [ "sleep infinity" ]