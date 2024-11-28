class responder {
    constructor(res) {
        this.res = res;
    }
    success({ message, payload }) {
        this.res.status(200);
        this.res.json({ message, payload });
    }

    fail(message) {
        this.res.status(400);
        this.res.send(message);
    }
}
module.exports = responder;