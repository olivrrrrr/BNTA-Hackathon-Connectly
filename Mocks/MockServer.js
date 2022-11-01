import {createServer, Model, server} from 'miragejs';
import {users} from './Users.js'
import {events} from './Events.js'

const mockServer = () => {
    return(createServer({
      models: {
          events: Model,
          users: Model,
      },
      routes() {
        //    this.namespace = "api"
           let userId = 4;
           let eventId = 3;

           this.get("/api/v1/events", (schema) => {
                return schema.events.all();
            });
            this.get("/api/v1/events/:id", (schema, req) => {
                return schema.events.find(req.params.id);
            })
            this.get("/api/v1/users", (schema) => {
                return schema.users.all();
            })
            this.get("/api/v1/users/:id", (schema, req) => {
                return schema.users.find(req.params.id);
            })
            this.post("/api/v1/events", (schema, req) => {
                let attrs = JSON.parse(req.requestBody)
                attrs.id = eventId++
                return schema.events.create(attrs)
            })
            this.post("/api/v1/users", (schema, req) => {
                let attrs = JSON.parse(req.requestBody)
                attrs.id = userId++
                return schema.users.create(attrs)
            })
        },

        seeds(server) {

        for (let i in events) {
            server.create("event", events[i]) 
    } 
        for (let i in users)  {
            server.create("user", users[i])
        }
        }
       
    }))
}

export {mockServer}