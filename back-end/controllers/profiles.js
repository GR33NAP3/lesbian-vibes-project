const Profile = require('../models/Profile')

// function for getting all of the profile database
async function getAllProfiles(req,res) {
    try {
        const profile = await Profile.find()
        res.json(profile)
    } catch (error) {
        console.log(`error fetching Profile:`, error)
        res.json({'message': 'error fetching Profile'})        
    }
}

module.exports = {
    getAllProfiles
}