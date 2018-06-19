#!/bin/sh

## DB Configuration
## DB Configuration
HOST=192.168.1.7
DB_NAME=Experion
USERNAME=revenuedev
PASSWORD='dev@123'
PORT=2433

OUT=./models
CONFIG=./core/genarators/model.genarator.json

## Installing sequelize-auto
if [! npm list -g | grep sequelize-auto]
then
	npm install -g sequelize-auto
fi

if [ ! -d $OUT ]; then
	mkdir -p $OUT;
fi

sequelize-auto -o $OUT -d $DB_NAME -h $HOST -u $USERNAME -p $PORT -x $PASSWORD -e mssql --config $CONFIG