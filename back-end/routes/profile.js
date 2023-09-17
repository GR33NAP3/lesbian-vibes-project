const router = require('express').Router()

const { 
    getAllProfiles,
    createProfile,
    deleteProfileById,
    updateProfileById,
    getProfileByEmail,
    getProfileById
} = require('../controllers/profiles')

//GET all profiles
router.get('/', getAllProfiles)

//GET one profile
router.get('/:id', getProfileById)

//POST for creating profile
router.post('/', createProfile)

//PUT updates profile
router.put('/:id',updateProfileById)

//Delete removes a profile
router.delete('/:id', deleteProfileById)

module.exports = router