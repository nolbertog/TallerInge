
const Proyecto = require('../db/models/proyecto');

async function crearProyecto(proyectoData) {
    try {
        const proyecto = await Proyecto.create(proyectoData);
        return proyecto;
    } catch (error) {
        throw new Error('Error al crear el proyecto');
    }
}

async function obtenerProyecto() {
    try {
        const proyecto = await Proyecto.findAll();
        return proyecto;
    } catch (error) {
        throw new Error('Error al obtener el proyecto');
    }
}

async function obtenerProyectoPorId(id) {
    try {
        const proyecto = await Proyecto.findByPk(id);
        if (!proyecto) {
            throw new Error('proyecto no encontrada');
        }
        return proyecto;
    } catch (error) {
        throw new Error('Error al obtener el proyecto por ID');
    }
}

async function actualizarProyecto(id, newData) {
    try {
        const [updated] = await Proyecto.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('proyecto no encontrado');
        }
        const proyecto = await Proyecto.findByPk(id);
        return proyecto;
    } catch (error) {
        throw new Error('Error al actualizar el proyecto');
    }
}

async function eliminarProyecto(id) {
    try {
        const deleted = await Proyecto.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('proyecto no encontrado');
        }
    } catch (error) {
        throw new Error('Error al eliminar el proyecto');
    }
}



module.exports = {
    crearProyecto,
    obtenerProyecto,
    obtenerProyectoPorId,
    actualizarProyecto,
    eliminarProyecto ,
};
