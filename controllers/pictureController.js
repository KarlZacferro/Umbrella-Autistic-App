const { json } = require("express");
const Picture = require("../models/Picture");

const fs = require("fs");

exports.create = async (req, res) => {
    
    try{

        const {name} = req.body;

        const file = req.file;

        const picture = new Picture({
            name,
            src: file.path
        })

        await picture.save();

        res.json({picture, msg: "Imagem salva com Sucesso!"})

    } catch(error) {
        res.status(500).json({message: "Error ao salvar imagem"})

        
    }

}; 
//funcionalidades para encontrar dos dados
exports.findAll = async (req, res) => {

    try {
        const pictures = await Picture.find();
        res.json(pictures);

    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar imagens."});
    }
};
//funcionalidades para remover dos dados
exports.remove = async(req, res) => {
    try{
        
        const picture = await Picture.findById(req.params.id) ;

        if(!pictures){

            return res.status(404),json({ message: "Imagem não encotrada."});
        }
//modulo importado para lidar com operaçoes de arquivo
        fs.unlinkSync(picture.src)

        await picture.remove()

        res.json({ message: "Imagem removida com Sucesso!" })

    } catch (error){
        res.status(500).json({ message: "Erro ao excluir imagem." });
    }

    }

