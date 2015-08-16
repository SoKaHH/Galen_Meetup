#!/bin/sh

# restart mysql
/etc/init.d/mysql restart

# run spring boot

java -jar /tmp/ng-spring-boot.jar  --server.port=40800 2> boot-error.log 1> boot-info.log