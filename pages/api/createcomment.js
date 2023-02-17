import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function Createcomment(req,res){
    prisma.rate.create(req.body)
    res.send('f')
    console.log(true)
}