const router = express.Router();
const Cost = require('../schemes/costs');
const availableCategories = ['food', 'utilities', 'transportation', 'entertainment'];



router.post('addcost/',async function(req,res,next){
    // Check if all required parameters are provided
    const { user_id, year, month, day, description, category, sum } = req.body;
    if (!user_id || !year || !month || !day || !description || !category || !sum) {
        return res.status(400).json({ error: 'Missing parameters' });
      }

    // Check if the category is valid
    if (!availableCategories.includes(category)) {
        return res.status(400).json({ error: 'Invalid category' });
      }

      const newCost = new Cost({
        user_id,
        year,
        month,
        day,
        description,
        category,
        sum
      });

    // Save the new cost item to the database
    await newCost.save(function(error, prod){
        //Return error couldnt save
        if(error){
            res.json({error: 'Could not save to DB'});
        }
        // Return the added cost item as the response
        if(prod){
            res.json(newCost);
        }
        
    });

    
});



module.exports = router;