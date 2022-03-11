# Vista-graphql

![Alt text](vista-graphql.webp?raw=true "Graphql")

A demonstration of GraphQL alongside nodeVISTA

nodeVISTA represents a layer of abstraction away from the core VistA system that allows FileMan queries to be run and returned as JSON

With GraphQL, queries can further be refined to attain the exact data required.

# Backend resolvers

Two approaches we used:

1) A simple call to the nodevista fmql endpoint (In this demonstration case, querying patients)
2) MongoDB as a JSON store which contains the data from the fmql endpoints.

# References:

nodeVISTA - http://vistadataproject.info/demo/

GraphQL - https://graphql.org/
