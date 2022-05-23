import path from 'path'
import env from 'dotenv-safe'

if (process.env.NODE_ENV === 'development') {
    env.load({
        path:   path.join(__dirname, '../../.env'),
        sample: path.join(__dirname, '../../.env.example'),
    })
}

env.config()

module.exports = {
    env:   process.env.NODE_ENV || 'development',
    port:  process.env.PORT || 8080,
    mongo: {
        uri: process.env.NODE_ENV === 'test' ? process.env.MONGO_URI_TESTS : process.env.MONGO_URI,
    },
}
