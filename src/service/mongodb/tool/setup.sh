#!/bin/sh

# Path for logging
mkdir -p /var/log/mongodb

# Run db at background to setup
mongod --config /etc/mongod.conf

# Setup mongodb
echo "use $MONGO_INITDB_DATABASE" >> setup.js
echo "db.createUser({" >> setup.js
echo "	user: '$MONGO_INITDB_ROOT_USERNAME'," >> setup.js
echo "	pwd: '$MONGO_INITDB_ROOT_PASSWORD'," >> setup.js
echo "	roles: [{" >> setup.js
echo "		role: 'readWrite'," >> setup.js
echo "		db: '$MONGO_INITDB_DATABASE'" >> setup.js
echo "	}]" >> setup.js
echo "})" >> setup.js

mongosh < setup.js

# Make container PID 1 as foreground process
tail -f /dev/null