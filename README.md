# Vista-graphql

![Alt text](vista-graphql.webp?raw=true "Graphql")

A demonstration of GraphQL alongside nodeVISTA

nodeVISTA represents a layer of abstraction away from the core VistA system that allows FileMan queries to be run and returned as JSON

With GraphQL, queries can further be refined to attain the exact data required.

# Backend resolvers

Two approaches are used:

1) A simple call to the nodevista fmql endpoint (In this demonstration case, querying patients)
2) MongoDB as a JSON store which contains the data from the fmql endpoints.

# Queries

1) Patients - Returns data for all patients using the REST API endpoint
2) Patient - Returns data for patients using the REST API endpoint, based on a passed name argument
3) Patients1 - Returns data for all patients using mongodb 
4) Patient1 - Returns data for patients using mongodb, based on a passed name argument

# Schema

The following fields have been setup to be interogated:

1) Name
2) Sex
3) date_of_birth
4) place_of_birth_city
5) place_of_birth_state

# Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/RamSailopal/Vista-graphql)

To run a Gitpod with this repo:

1) Create a free/paid Gitpod account - https://www.gitpod.io/
2) Log into the account
3) Open a new browser tab and add **gitpod.io/#https://github.com/RamSailopal/Vista-graphql** to the address - This will create a new Gitpod cloud instance.
4) Wait till the Docker compose messages stop scrolling and then navigate to https://5000-ramsailopal-vistagraphql-u56rcn2tf3y/graphql, replacing ramsailopal-vistagraphql-u56rcn2tf3y with your gitpod address. You should now be able to add queries in the left panel as shown in the graphic.

# References:

nodeVISTA - http://vistadataproject.info/demo/

GraphQL - https://graphql.org/
