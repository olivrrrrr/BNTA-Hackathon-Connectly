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