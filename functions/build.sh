#!/bin/bash

pack build --builder=gcr.io/buildpacks/builder korifi/bucket-api:$(uuidgen)
