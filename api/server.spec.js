const request = require("supertest");
const server = require("./server.js");

describe("server.js", () =>{
    describe("Register", () => {
        it("returns 200", async ()=> {
            const res = await request(server)
            .post("/api/auth/login")
            .send({
                username:"",
                password:""
            });
        })
    });
    describe("Register", () => {
        it("recives username and password",async () => {
            const res = await request(server)
            .post("/api/auth/register")
            .send({
                username: "",
                password:""         
            });
        })
    })
})


