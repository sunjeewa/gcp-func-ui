
/**
 * Webapp to serve static console
 */

const cors = require('cors')
const express = require('express')
const path = require('path');
const { Router, Request } = require('express')
const app = express()
const methodOverride = require('method-override')


const router = Router()

router.get('*', function (req, res) {
    try {
        res.sendFile(path.join(__dirname + req.url));
    } catch (e) {
        console.log(e)
        next(e);
    }
});

app.use(cors({ origin: true }));
app.use(express.json());
app.use('/', router);
app.use(methodOverride())
app.use((err, req, res, next) => {
    res.status(400).json({
        error: err.message
    });
});


var exports = module.exports = {};
exports.console = function (req, res) {
    if (!req.url) {
        req.url = '/';
        req.path = '/';
    }
    if (req.path == '/console') {
        req.path = '/console/'
    }
    return app(req, res);
}
