module.exports = {
    path: 'CRUDDemo',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/MainTab'))
        })
    }
}
