'use strict';

module.exports = function(Account) {
    Account.search = function(searchText, callback) {
        const filter = { 
            where: { 
                or: [
                    { email: { like: '%' + searchText + '%' } },
                    { name: { like: '%' + searchText + '%' } },
                    { username: { like: '%' + searchText + '%' } }
                ] 
            } 
        };

        Account.find(filter, (err, res) => {
            if (err) {
                return callback({statusCode: 500, message: 'Error from server', err: err}, null);
            }
            return callback(null, res);
        })
    }
};
