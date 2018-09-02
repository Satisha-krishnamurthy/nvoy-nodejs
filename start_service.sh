#!/bin/sh
npm start &
envoy -c /etc/service-envoy.yaml --service-cluster service${SERVICE_NAME}
