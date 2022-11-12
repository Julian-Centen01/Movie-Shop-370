import Movie from '../models/movies.model'
import formidable from 'formidable'
import fs from 'fs'
import errorHandler from '../helpers/dbErrorHandler'

const create = (req, res, next) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, async (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error:
            })
        }
        }
    )

}
