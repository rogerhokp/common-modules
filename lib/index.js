'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = exports.logger = exports.toHkTime = exports.EmailSendService = exports.AuditLoggerService = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AuditLoggerService = require('./AuditLoggerService');

var _AuditLoggerService2 = _interopRequireDefault(_AuditLoggerService);

var _EmailSendService = require('./EmailSendService');

var _EmailSendService2 = _interopRequireDefault(_EmailSendService);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

let hostname, http, port, version;


const httpPost = (_ref) => {
    let { body } = _ref,
        options = _objectWithoutProperties(_ref, ['body']);

    return new Promise((resolve, reject) => {
        const req = http.request(_extends({
            method: 'POST'
        }, options), res => {

            const chunks = [];
            res.on('data', data => chunks.push(data));
            res.on('end', () => {
                let body = Buffer.concat(chunks);
                switch (res.headers['content-type']) {
                    case 'application/json':
                        body = JSON.parse(body);
                        break;
                    default:

                };
                const statusCode = res.statusCode;
                if (statusCode >= 200 && res.statusCode <= 299) {
                    resolve(body);
                } else {
                    console.error('Invalid response', body.toString());
                    reject(body.toString());
                }
            });
        });
        req.on('error', error => {
            console.error('Log error', error);
            reject(error);
        });
        if (body) {
            req.write(body);
        }
        req.end();
    });
};

const init = (_path, _version) => {
    if (_path.startsWith('https://')) {
        http = require('https');
    } else {
        http = require('http');
    }
    const cmpt = _path.replace(/http(s*):\/\//, '').split(':');
    hostname = cmpt[0];
    port = cmpt[1] || 8080;
    version = _version;
};
const logger = ({ object, action, payload, userId, date = Date.now() }) => {
    console.log({ object, action, payload, userId, date });
    return;
    try {
        httpPost({
            hostname,
            port,
            path: '/' + version + '/log',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                object, action, payload, userId, date
            })
        });
    } catch (e) {
        console.error('logger error', e);
    }
};

const toHkTime = t => _moment2.default.utc(t).add(8, 'hr').clone();

exports.AuditLoggerService = _AuditLoggerService2.default;
exports.EmailSendService = _EmailSendService2.default;
exports.toHkTime = toHkTime;
exports.logger = logger;
exports.init = init;