import {createServer, Model, server} from 'miragejs';


function MockServer() {

 return(
    createServer({
      models: {
          event: Model,
          person: Model
      },
      routes() {
           this.namespace = "api"
           
           this.get("/api/events", (schema) => {
                return schema.event.all;
            });
            this.get("/api/events/:id", (schema, req) => {
                return schema.event.find(req.params.id);
            })
            this.get("/api/people", (schema) => {
                return schema.person.all;
            })
            this.get("/api/person/:id", (schema, req) => {
                return schema.person.find(req.params.id);
            })
        },

        seeds() {
            server.create("events", {})
            server.create("people", {})
        }
       
    }))
}


export default MockServer;
