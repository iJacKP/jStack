const CategoriesRepository = require('../repositories/CategoriesRepository')

class CategoryController {

    async index(req,res) {


        const { orderBy } = req.query

        const categories = await CategoriesRepository.findAll(orderBy)

        res.json(categories)


    }

    async store(req,res) {
        const { name } = req.body

        if(!name) {
            res.status(400).json({ error : 'Name is required!'})
        }

        const category = await CategoriesRepository.create({name})

        return res.json(category)

    }

    async show(req,res){

        const { id } = req.params

        const categoryExists = await  CategoriesRepository.findById(id)

        if(!categoryExists) {
            res.status(404).json({error : 'Category not found'})
        }

        res.json(categoryExists)

    }

    async update(req,res){
        const { name } = req.body
        const { id } = req.params


        if(!name){
            res.status(400).json({ error : "Name is required "})
        }

        const categoryUpdated = await CategoriesRepository.update(id , { name })

        res.json(categoryUpdated)

    }

    async delete(req,res){
        const { id } = req.params

        await CategoriesRepository.delete(id)

        res.sendStatus(204)
    }

}

module.exports = new CategoryController()
