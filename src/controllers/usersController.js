//----------* REQUIRE'S *----------//
const axios = require('axios');
const defaults = require('../api/default');
/* const apiCall = require('../api/apiCall'); */


//----------* VARIABLES *----------//
const userInfo = 'user/me';
const addPoints = 'user/points';
const userHistory = 'user/history';


//----------* USERS CONTROLLER *----------//
const usersController = {
    userInfo: async (req, res, next) => {
        const user = await axios({
            ...defaults,
            method: 'GET',
            url: userInfo
        })
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        res.render('index', { user });
    },

    userHistory: async (req, res, next) => {
        const history = await axios({
            ...defaults,
            method: 'GET',
            url: userHistory
        })
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        res.json( history)
    },

    addPoints1000: async (req, res, next) => {
        await axios({
            ...defaults,
            method: 'POST',
            url: addPoints,
            data: {
                amount: 1000,
            }
        })
        .then(response => {
            console.log(`RESULT:${response.data}`);
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        return res.redirect('/');
    },

    addPoints5000: async (req, res, next) => {
        await axios({
            ...defaults,
            method: 'POST',
            url: addPoints,
            data: {
                amount: 5000,
            }
        })
        .then(response => {
            console.log(`RESULT:${response.data}`);
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        return res.redirect('/');
    },

    addPoints7500: async (req, res, next) => {
        await axios({
            ...defaults,
            method: 'POST',
            url: addPoints,
            data: {
                amount: 7500,
            }
        })
        .then(response => {
            console.log(`RESULT:${response.data}`);
        })
        .catch(error => {
            return console.error('ERROR FETCHING API DATA -', error);
        })

        return res.redirect('/');
    }
}


//----------* EXPORTS CONTROLLER *----------//
module.exports = usersController;