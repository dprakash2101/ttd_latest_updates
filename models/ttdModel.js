class Update {
    constructor(id, tag, data, publishedAt) {
        if (!id || typeof id !== 'number') {
            throw new Error('Invalid ID');
        }

        if (!tag || typeof tag !== 'string') {
            throw new Error('Invalid tag');
        }

        if (!data || typeof data !== 'string') {
            throw new Error('Invalid data');
        }

        this.id = id;
        this.tag = tag;
        this.data = data;
        this.publishedAt = publishedAt ? new Date(publishedAt) : new Date();
    }

    // Utility method to format the published date
    formatPublishedDate() {
        return this.publishedAt.toLocaleDateString();
    }
}

module.exports = Update;
