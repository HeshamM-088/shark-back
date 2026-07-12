const cartSchema =require('../../models/cart.model');
const responseToFront = require('../../Helpers/response');

const addToCart= async(req,res)=>{
    const{ userId , productId ,count} = req.body;


     const cartDetails = await cartSchema.create({
        user:userId,
        products:productId,
        count,
    });

    console.log(cartDetails)

    return res.status(201).json(responseToFront(201 ,"added successfully", null));
};

module.exports = addToCart;









// const cartSchema = require('../../models/cart.model');
// const responseToFront = require('../../Helpers/response');

// const addToCart = async (req, res) => {
//     try {
//         const { userId, productId, count } = req.body;

//         const quantity = count ? Number(count) : 1;


//         const cartDetails = await cartSchema.findOneAndUpdate(
//             { user: userId, products: productId },
//             { $inc: { count: quantity } },
//             { new: true, upsert: true } 
//         );

//         console.log(cartDetails);

//         return res.status(201).json(responseToFront(201, "added done", cartDetails));

//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             success: false,
//             message: "cant add" + error
//         });
//     }
// };

// module.exports = addToCart;