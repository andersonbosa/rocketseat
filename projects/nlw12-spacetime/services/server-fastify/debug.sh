#!/usr/bin/env sh
# -*- coding: utf-8 -*-

# pid_to_debug=$1  # Uncomment this line to pass PID as argument
pid_to_debug=$(ps -ax | grep 'node ' | grep 'nodemon ' | awk '{print $1}')

node inspect -p $pid_to_debug
