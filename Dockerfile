
FROM nginx:alpine
MAINTAINER Felipe Apablaza (ing.apablaza@gmail.com)

ENTRYPOINT ["/usr/bin/nginx", "-g", "daemon off"]
EXPOSE 80
