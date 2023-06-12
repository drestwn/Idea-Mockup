const app = require("../app")
const request = require('supertest') //supertest
const DeleteData = require('../lib/deleteData')
const { inputPostData } = require('../lib/createData')

beforeAll(() => {
    inputPostData()
})

afterAll(() => {
    DeleteData()
});

describe("testRegister", () => {
    describe("testRegisCus", () => {
        it("check register Customer 201", async () => {
            const response = await request(app)
                .post("/customerPost")
                .send({
                    email: "test@gmail.com",
                    password: "123456"
                })
                .set('Content-Type', 'application/x-www-form-urlencoded')
                // console.log(response.body, 'line 22')
                .expect(201)

            expect(response.body.detail).toBe('test@gmail.com')
            expect(response.body).toHaveProperty("message", "Hello Customer, your email has been created. Please login now")
        })
        it("check Register Customer tanpa email 400", async () => {
            const response = await request(app)
                .post("/customerPost")
                .send({
                    email: "",
                    password: "123456"
                })
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(400)
        })
        it("check Register Customer tanpa password 400", async () => {
            const response = await request(app)
                .post("/customerPost")
                .send({
                    email: "coba@gmail.com",
                    password: ""
                })
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(400)
        })
        it("check Register Customer email string kosong 400", async () => {
            const response = await request(app)
                .post("/customerPost")
                .send({
                    email: "",
                    password: "123456"
                })
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(400)
        })
        it("check Register Customer password string kosong 400", async () => {
            const response = await request(app)
                .post("/customerPost")
                .send({
                    email: "coba@gmail.com",
                    password: ""
                })
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(400)
        })
        it("check register Customer 400 email terdaftar", async () => {
            const response = await request(app)
                .post("/customerPost")
                .send({
                    email: "test@gmail.com",
                    password: "35353"
                })
                .set('Content-Type', 'application/x-www-form-urlencoded')
                // console.log(response.body, 'line 22')
                .expect(400)
        })
        it("check register Customer format email salah", async () => {
            const response = await request(app)
                .post("/customerPost")
                .send({
                    email: "test",
                    password: "35353"
                })
                .set('Content-Type', 'application/x-www-form-urlencoded')
                // console.log(response.body, 'line 22')
                .expect(400)
        })
    })
    describe("testLoginCus", () => {
        it("testLoginCus berhasil 200", async () => {
            const response = await request(app)
                .post("/customerLogin")
                .send({
                    email: "test@gmail.com",
                    password: "123456"
                })
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(200)
            // console.log(response.body, 'line 22')
            expect(response.body.email).toBe('test@gmail.com')
            expect(response.body).toHaveProperty("message", "Selamat datang, mari buang uangmu")
        })
        it("testLoginCus tidak berhasil 400 password salah", async () => {
            const response = await request(app)
                .post("/customerLogin")
                .send({
                    email: "test@gmail.com",
                    password: "12313132"
                })
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(400)
            // console.log(response.body, 'line 22')
            // expect(response.body.email).toBe('test@gmail.com')
        })
        it("testLoginCus tidak berhasil 400 email tidak terdaftar", async () => {
            const response = await request(app)
                .post("/customerLogin")
                .send({
                    email: "testing@gmail.com",
                    password: "12313132"
                })
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(400)
            // console.log(response.body, 'line 22')
            // expect(response.body.email).toBe('test@gmail.com')
        })
    })
})

describe("testEntitasUtama", () => {
    it('renderTanpatoken', async () => {
        const response = await request(app)
            .get("/cusPost")
            .expect(200)
        expect(typeof response.body.post).toBe('object')
        // console.log(response)
    })
    it('renderTanpaToken 1 query Filter', async () => {
        const response = await request(app)
            .get(`/cusPost`)
            .query({ sort: 'DESC' })
            .expect(200)
        // console.log(response.body, "line 147")
        // expect(response.body.Post[0].keys)
    })
    it('renderTanpaToken 1 pagination', async () => {
        const response = await request(app)
            .get("/readPagination")
            .query({
                limit: 2
            })
            .expect(200)
        // console.log(response.body, "line 149")
        expect(response.body.renderPost.rows).toHaveLength(2)
    })
    it('renderTanpaToken 1 params', async () => {
        const id = 40
        const response = await request(app)
            .get(`/cusPost/${id}`)
            .expect(404)
        // console.log(response.body, "line 147")
        // expect(response.body.Post.id).toBe(1)
    })
})