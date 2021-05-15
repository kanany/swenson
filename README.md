## Launching using docker

Run `docker-compose up` for a dev server inside the root dir. Navigate to `http://localhost:3000/`.

## Load the DB seed Manual "no need if launching using docker"
`cd ./mongo-seed && mongoimport --host localhost --db swenson --collection coffee_machines --type json --file ./init_machines.json --jsonArray && mongoimport --host localhost --db swenson --collection coffee_pods --type json --file ./init_pods.json --jsonArray`

## Manual launching

Navigate to backend dir and change the DB_HOST inside .env file to localhost then, `npm start`

## Running Nodejs unit tests

Navigate to backend server while server is serving then run `npm test`.


## The first task is to determine what the return array should look like for the certain cross-sell scenarios 

Go to http://localhost:3000/api-docs/, I'm using Swagger for API docs each API will have a return example and you can try each param to see the return array.

All small machines
    o CM001
    o CM002
    o CM003

    Small machines water line compatible
        o CM003

    Small machines none water line compatible
        o CM001
        o CM002


All large machines
    o CM101
    o CM102
    o CM103

    Large machines water line compatible
        o CM102
        o CM103

    Large machines none water line compatible
        o CM101

All espresso machines
    o EM001
    o EM002
    o EM003

    Espresso machines water line compatible
        o EM003

    Espresso machines none water line compatible
        o EM001
        o EM002

All water line compatible machines
    o CM003
    o CM102
    o CM103
    o EM003

All non water line compatible machines
    o CM001 
    o CM002
    o CM101
    o EM001
    o EM002


All small pods
    o CP001
    o CP003
    o CP011
    o CP013
    o CP021
    o CP023
    o CP031
    o CP033
    o CP041
    o CP043

    All small sold in 1 dozen packs
        o CP001
        o CP011
        o CP021
        o CP031
        o CP041
    All small sold in 3 dozen packs
        o CP003
        o CP013
        o CP023
        o CP033
        o CP043
    All small sold in 5 dozen packs
        null
    All small sold in 7 dozen packs
        null

    All small vanilla pods
        o EP003
        o EP005
        o EP007

        All small vanilla pods sold in 1 dozen packs
            o CP001
        All small vanilla pods sold in 3 dozen packs
            o CP003
        All small vanilla pods sold in 5 dozen packs
            null
        All small vanilla pods sold in 7 dozen packs
            null

    All small caramel pods
        o CP011
        o CP013

        All small caramel pods sold in 1 dozen packs
            o CP011
        All small caramel pods sold in 3 dozen packs
            0 CP013
        All small caramel pods sold in 5 dozen packs
            null
        All small caramel pods sold in 7 dozen packs
            null

    All small psl pods
        o CP021
        o CP023

        All small psl pods sold in 1 dozen packs
            o CP021
        All small psl pods sold in 3 dozen packs
            o CP023
        All small psl pods sold in 5 dozen packs
            null
        All small psl pods sold in 7 dozen packs
            null

    All small mocha pods
        o CP031
        o CP033

        All small mocha pods sold in 1 dozen packs
            o CP031
        All small mocha pods sold in 3 dozen packs
            o CP033
        All small mocha pods sold in 5 dozen packs
            null
        All small mocha pods sold in 7 dozen packs
            null

    All small hazelnut pods
        o CP041
        o CP043

        All small hazelnut pods sold in 1 dozen packs
            o CP041
        All small hazelnut pods sold in 3 dozen packs
            o CP043
        All small hazelnut pods sold in 5 dozen packs
            null
        All small hazelnut pods sold in 7 dozen packs
            null

All large pods
    o CP101
    o CP103
    o CP111
    o CP113
    o CP121
    o CP123
    o CP131
    o CP133
    o CP141
    o CP143

    All large sold in 1 dozen packs
        o CP101
        o CP111
        o CP121
        o CP131
        o CP141

    All large sold in 3 dozen packs
        o CP103
        o CP113
        o CP123
        o CP133
        o CP143
    All large sold in 5 dozen packs
        null
    All large sold in 7 dozen packs
        nulls

    All large vanilla pods
        o CP101
        o CP103

        All large vanilla pods sold in 1 dozen packs
            o CP101
        All large vanilla pods sold in 3 dozen packs
            o CP103
        All large vanilla pods sold in 5 dozen packs
            null
        All large vanilla pods sold in 7 dozen packs
            null

    All large caramel pods
        o CP111
        o CP113

        All large caramel pods sold in 1 dozen packs
            o CP111
        All large caramel pods sold in 3 dozen packs
            o CP113
        All large caramel pods sold in 5 dozen packs
            null
        All large caramel pods sold in 7 dozen packs
            null

    All large psl pods
        o CP121
        o CP123

        All large psl pods sold in 1 dozen packs
            o CP121
        All large psl pods sold in 3 dozen packs
            o CP123
        All large psl pods sold in 5 dozen packs
            null
        All large psl pods sold in 7 dozen packs
            null

    All large mocha pods
        o CP131
        o CP133

        All large mocha pods sold in 1 dozen packs
            o CP131
        All large mocha pods sold in 3 dozen packs
            o CP133
        All large mocha pods sold in 5 dozen packs
            null
        All large mocha pods sold in 7 dozen packs
            null

    All large hazelnut pods
        o CP141
        o CP143

        All large hazelnut pods sold in 1 dozen packs
            o CP141
        All large hazelnut pods sold in 3 dozen packs
            o CP143
        All large hazelnut pods sold in 5 dozen packs
            null
        All large hazelnut pods sold in 7 dozen packs
            null

All espresso pods
    o EP003
    o EP005
    o EP007
    o EP013
    o EP015
    o EP017

    All espresso sold in 1 dozen packs
        null
    All espresso sold in 3 dozen packs
        o EP003
        o EP013
    All espresso sold in 5 dozen packs
        o EP005
        o EP015
    All espresso sold in 7 dozen packs
        o EP007
        o EP017

    All espresso vanilla pods
        o EP003
        o EP005
        o EP007

        All espresso vanilla pods sold in 1 dozen packs
            null
        All espresso vanilla pods sold in 3 dozen packs
            o EP003
        All espresso vanilla pods sold in 5 dozen packs
            o EP005
        All espresso vanilla pods sold in 7 dozen packs
            o EP007

    All espresso caramel pods
        o EP013
        o EP015
        o EP017

        All espresso caramel pods sold in 1 dozen packs
            null
        All espresso caramel pods sold in 3 dozen packs
            o EP013
        All espresso caramel pods sold in 5 dozen packs
            o EP015
        All espresso caramel pods sold in 7 dozen packs
            o EP017

    All espresso psl pods
        null

        All espresso psl pods sold in 1 dozen packs
            null
        All espresso psl pods sold in 3 dozen packs
            null
        All espresso psl pods sold in 5 dozen packs
            null
        All espresso psl pods sold in 7 dozen packs
            null

    All espresso mocha pods
        null

        All espresso mocha pods sold in 1 dozen packs
            null
        All espresso mocha pods sold in 3 dozen packs
            null
        All espresso mocha pods sold in 5 dozen packs
            null
        All espresso mocha pods sold in 7 dozen packs
            null

    All espresso hazelnut pods
        null

        All espresso hazelnut pods sold in 1 dozen packs
            null
        All espresso hazelnut pods sold in 3 dozen packs
            null
        All espresso hazelnut pods sold in 5 dozen packs
            null
        All espresso hazelnut pods sold in 7 dozen packs
            null


All pods sold in vanilla flavor
    o CP001
    o CP003
    o CP101
    o CP103
    o EP003
    o EP005
    o EP007

All pods sold in caramel flavor
    o CP011
    o CP013
    o CP111
    o CP113
    o EP013
    o EP015
    o EP017

All pods sold in psl flavor
    o CP021
    o CP023
    o CP121
    o CP123

All pods sold in mocha flavor
    o CP031
    o CP033
    o CP131
    o CP133

All pods sold in hazelnut flavor
    o CP041
    o CP043
    o CP141
    o CP143

All pods sold in 1 dozen packs
    o CP001
    o CP011
    o CP021
    o CP031
    o CP041
    o CP101
    o CP111
    o CP121
    o CP131
    o CP141

All pods sold in 3 dozen packs
    o CP003
    o CP013
    o CP023
    o CP033
    o CP043
    o CP103
    o CP113
    o CP123
    o CP133
    o CP143
    o EP003
    o EP013

All pods sold in 5 dozen packs
    o EP005
    o EP015

All pods sold in 7 dozen packs
    o EP007
    o EP017
    