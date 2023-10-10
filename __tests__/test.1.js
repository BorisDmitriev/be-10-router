const request = require("supertest");
const app = require("../server");

describe("Test the book path", () => {
    test("It should respond the GET method", async () => {
        const response = await request(app).get("/books");
        expect(response.statusCode).toBe(200);
    });

    test("It should respond the POST method", async () => {
        const response = await request(app).post("/books").send({
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
        });
        expect(response.statusCode).toBe(200);
    });

    test("It should respond the PUT method", async () => {
        const response = await request(app).put("/books/1").send({
            title: "Game of Thrones: The song of ice and fire",
            author: "Greorge R.R. Martin",
        });
        expect(response.statusCode).toBe(200);
    });

    test("It should respond the DELETE method", async () => {
        const response = await request(app).delete("/books/1");
        expect(response.statusCode).toBe(200);
    });
});
