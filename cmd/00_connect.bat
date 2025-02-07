@echo off

@REM mongosh "mongodb://fkadmin:%MONGOSH_PASSWORD%@atlas-stream-67a5742f93ac4b29dd4e3edc-qps1e.virginia-usa.a.query.mongodb.net/" --file stream\01_all.js

mongosh "mongodb://atlas-stream-67a5742f93ac4b29dd4e3edc-qps1e.virginia-usa.a.query.mongodb.net/" --tls --authenticationDatabase admin --username fkadmin --password %MONGOSH_PASSWORD% 