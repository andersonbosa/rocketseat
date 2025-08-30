# notes

### testing github oauth login

1. in frontend, access the github oauth ""

```bash
get_access_token() {
  GITHUB_CODE=$1
  http POST localhost:3333 code=$GITHUB_CODE --json
}
```

# debugging

## services/app-web

#### build docker container in random port
```bash
run_container() {
  local container_name="$1"
  local image_tag="${container_name}:latest"
  local RANDOM_PORT=$RANDOM

  docker build --no-cache -t $image_tag . &&
    docker run  --rm -d --name $container_name -p $RANDOM_PORT:$RANDOM_PORT $image_tag &&
    docker logs -f $container_name
}

run_container abacate
```

#### get memories in browser console

```js
const {value: t} = await window.cookieStore.get('token')

await fetch ('http://localhost:3333/memories', {
    headers: {
        'Authorization': `Bearer ${t}`
    }
})
.then(r => r.json())

```

## services/app-mobile

## services/server-fastify

## services/tick/influxdb

Testing authentication 
```bash
curl -Lik -G -u root:rootroot http://localhost:8086/query --data-urlencode "q=SHOW DATABASES"

# influx db v2
curl -Lik 'http://localhost:8888/chronograf/v1/sources?' \
  --data-raw '{"url":"http://localhost:8086","name":"Influx 1","username":"root-org","password":"c6kdySjlXF77fhZrBcgfkAL9pOK5qTwzxs9TYLcn6a_bQUvPEPk4D1nyD3WfIW1bNzUwpQKkeAwUNpja4JGB2A==","default":false,"telegraf":"telegraf","insecureSkipVerify":false,"metaUrl":"http://localhost:8091","version":"2.x","type":"influx-v2"}'
```

# references

1. https://github.com/wpcodevo/google-github-oauth2-nodejs/blob/master/src/controllers/auth.controller.ts
2. https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps
3. https://codevoweb.com/how-to-implement-github-oauth-in-reactjs/
4. https://nodejs.org/api/cli.html#cli_node_options_options
   1. https://nodejs.org/en/docs/guides
5. https://github.com/localstack/localstack-pro-samples
6. https://github.com/flolu/docker-typescript-debug/blob/master/docker-compose.yml
7. https://github.com/kconner/next-js-in-docker-example
8. https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
9. https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference
10. https://github.com/hekima/sandbox/
11. https://www.influxdata.com/blog/running-influxdb-2-0-and-telegraf-using-docker/
12. https://stackoverflow.com/questions/69774634/telegraf-can-not-connect-to-docker-sock
13. https://github.com/rmountjoy92/DashMachine
14. 