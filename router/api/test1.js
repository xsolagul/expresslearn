const express = require('express');
const router = express.Router();
const books = require('../../db') // ออกสองรอบเพราะ / ถื่อเป็นสร้างfolder ข้างใน
const dbBooks = require('../../model/book')
router.get('/', async (req, res) => {
    const book = await dbBooks.find()
    res.json(book)
  })
  
  router.get('/:id', async (req, res) => {
    const book = await dbBooks.findOne({id:req.params.id})
    res.json(book)
    })
    
  router.post('/', async (req, res) => {
      const payload = req.body
      const book = new dbBooks(payload)
      await book.save()
      res.status(201).json(book)
    })
    
  router.put('/:id', async(req, res) => {
    const payload = req.body
    const {id} = req.params
    const book = await dbBooks.findOneAndUpdate({id:id},{ payload })
    res.json(book)
    })
  
  router.delete('/:id', async (req, res) => {
     const {id} = req.params
      await dbBooks.findOneAndDelete({id: id})
      res.status(204).send()
   })
    
  router.get('/test', (req, res) => {
    res.send('Hello World')
  })
  
  module.exports = router;
