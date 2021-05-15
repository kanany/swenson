FROM mongo

COPY init_pods.json /init_pods.json

COPY init_machines.json /init_machines.json

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.5.1/wait /wait
RUN chmod +x /wait

## Launch the wait tool and then your application

CMD /wait && mongoimport --host mongodb --db swenson --collection coffee_machines --type json --file /init_machines.json --jsonArray && mongoimport --host mongodb --db swenson --collection coffee_pods --type json --file /init_pods.json --jsonArray