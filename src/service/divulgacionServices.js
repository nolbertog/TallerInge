
const Divulgacion = require('../db/models/divulgacion');

async function crearDivulgacion(divulgacionData) {
    try {
        const divulgacion = await Divulgacion.create(divulgacionData);
        return divulgacion;
    } catch (error) {
        throw new Error('Error al crear la divulgacion');
    }
}

async function obtenerDivulgacion() {
    try {
        const divulgacion = await Divulgacion.findAll();
        return divulgacion;
    } catch (error) {
        throw new Error('Error al obtener la divulgacion');
    }
}

async function obtenerDivulgacionPorId(id) {
    try {
        const divulgacion = await Divulgacion.findByPk(id);
        if (!divulgacion) {
            throw new Error('divulgacion no encontrada');
        }
        return divulgacion;
    } catch (error) {
        throw new Error('Error al obtener la divulgacion por ID');
    }
}

async function actualizarDivulgacion(id, newData) {
    try {
        const [updated] = await Divulgacion.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Divulgacion no encontrada');
        }
        const divulgacion = await Divulgacion.findByPk(id);
        return divulgacion;
    } catch (error) {
        throw new Error('Error al actualizar la divulgacion');
    }
}

async function eliminarDivulgacion(id) {
    try {
        const deleted = await Divulgacion.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('divulgacion no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la divulgacion');
    }
}



module.exports = {
    crearDivulgacion,
    obtenerDivulgacion,
    obtenerDivulgacionPorId,
    actualizarDivulgacion,
    eliminarDivulgacion,
};
