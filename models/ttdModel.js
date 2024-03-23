// models/updateModel.js
class Update {
    constructor(id, tag, data, publishedAt) {
        this.id = id;
        this.tag = tag;
        this.data = data;
        this.publishedAt = publishedAt;
    }
}

module.exports = Update;
