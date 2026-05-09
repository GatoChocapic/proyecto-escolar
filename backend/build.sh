#!/usr/bin/env bash
# exit on error
set -o errexit

pip install -r requirements.txt

python manage.py collectstatic --no-input
# Omitimos migrate en MongoDB para evitar el error de __fake__.ContentType
