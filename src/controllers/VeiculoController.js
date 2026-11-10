import pool from '../config/database.js';

class VeiculoController {
   
    
async criar(req, res) {
    const {placa, modelo,marcar, ano, cliente_id} = req.body

    if(!placa|| !modelo || ! marcar || !ano || !cliente_id){
        return res.status(400).json({message: 'VErifique os dados enviados'})
    }

        try {
            const[rows] =await pool.query(
                `INSERT INTO veiculos (placa, modelo, marcar, ano, cliente_id)
                VALUES (?,?,?,?,?)`,
                [placa, modelo, marcar, ano, cliente_id]
            );
             res.status(201).json({message:'Registro criado com sucesso', id: rows.insertId})

        } catch (error) {
            console.error("Ocorreu um erro", error)
            return res.status(500).json({
                message: 'Ocorreu um erro no servidor',
                errorMessage: error.message
            })
            return
        }
    }

}


export default new VeiculoController