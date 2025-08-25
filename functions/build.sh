#!/bin/bash

pack build --builder=gcr.io/buildpacks/builder korifi/file-api:$(uuidgen)
