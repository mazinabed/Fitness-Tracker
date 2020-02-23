const router = require("express").Router();
const Workout = require("../models/workout.js");

//const db = mongojs("workout", ["workout"]);


router.get("/api/workouts", function (req, res) {
    //console.log("hello");
    Workout.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(data);
            res.json(data);
        }
    })
})

// router.post("/api/workouts", (req, res) => {
//     console.log(req.body)
//     Workout.create({})
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

router.put("/api/workouts/:id", ({body, params}, res) => {
    //let id = req.params.id;
    // console.log("this is ID" , req.params.id);
    // console.log("this is body", req.body);

    Workout.findByIdAndUpdate( params.id, {$push : {exercises : body}}, {new: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
        console.log("this is doc (Return)", doc);
        return res.send(doc);
    });

    // Workout.update(
    //     {
    //         _id: mongojs.ObjectId(req.params.id)
    //     },
    //     {
    //         $set: req.body
    //     },
    //     (error, data) => {
    //         if (error) {
    //             res.send(error);
    //         } else {
    //             res.send(data);
    //         }
    //     }
    // )
})

router.post("/api/workouts", function (req, res) {
    //console.log(req);

    Workout.create({}, function (error, data) {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    })
});



module.exports = router;
