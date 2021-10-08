const router = require('express').Router();
const pool = require('../../db/index').pool;
const Profile = require('../models/profiles');
const User = require('../models/users');
const config = require('../config');

router.put('/(:id)', async (req, res) => {

    try {
        const { id } = req.params; // user_profile_id
        const { user_name, address, city, country, postal_code, about, dob } = req.body;

        if (config.db == "mongo") {
            Profile.findOneAndUpdate({ _id: id }, req.body, { new: true }, (err, result) => {
                if (!err) res.json("record updated successfully!");
                else {
                    console.log(err);
                    res.json("Error in updating record!");
                }
            });

        } else {

            const query = "UPDATE users_profile SET user_name = $1, address = $2, city = $3, country = $4, postal_code = $5, about = $6, dob = $7 WHERE id = $8";
            await pool.query(query, [user_name, address, city, country, postal_code, about, dob, id]);
            res.json("Profile Updated!");
        }

    } catch (err) {
        console.log(err);
        res.json("API Error");
    }
});

router.get('/(:id)', async (req, res) => {

    const { id } = req.params;  // user id

    try {
        if (config.db == "mongo") {
            User.findById(id)
                .then((user) => {
                    // console.log(user);
                    Profile.findById(user.user_profile_id).then((profile) => {
                        // res.json(profile);
                        res.json({
                            user_id: user._id,
                            user_profile_id: profile._id,
                            role: user.role,
                            user_name: profile.user_name,
                            city: profile.city,
                            country: profile.country,
                            postal_code: profile.postal_code,
                            about: profile.about,
                            f_name: profile.f_name,
                            l_name: profile.l_name,
                            email: profile.email,
                            phone_number: profile.phone_number,
                            dob: profile.dob
                        });
                    })
                        .catch((err) => {
                            console.log(err);
                            res.json("Error in getting profile data by id");
                        })
                    // res.json(user);
                })
                .catch((err) => {
                    console.log(err);
                    res.json("Error in getting user data by id");
                })

        } else {
            // const query = "SELECT users_profile.id, users.role, user_name, address, city, country, postal_code, about, f_name, l_name, email, phone_number, dob FROM users_profile join users on users_profile.id = users.id WHERE users.id = $1";
            const query = "select u.id, u.user_profile_id, u.role, up.user_name, up.f_name, up.l_name, up.email, up.address, up.city, up.country, up.postal_code, up.phone_number, up.dob from users u join users_profile up on u.user_profile_id = up.id where u.id = $1"
            const result = await pool.query(query, [id]);
            res.json(result.rows[0]);
        }

    } catch (err) {
        console.log(err);
        res.json("API Error");
    }
});

module.exports = router;