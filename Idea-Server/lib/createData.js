const { Post } = require('../models/index')
const dataPost = require('../data/posts.json')

async function inputPostData() {
    try {
        await Post.bulkInsert(dataPost)
    } catch (err) {
        console.log(err)
    }
}

module.exports = { inputPostData }