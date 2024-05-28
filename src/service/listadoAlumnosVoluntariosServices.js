
const ListadoAlumnosVoluntarios = require('../db/models/listadoAlumnosVoluntarios');

async function crearListadoAlumnosVoluntarios(listadoAlumnosVoluntariosData) {
    try {
        const listadoAlumnosVoluntarios = await ListadoAlumnosVoluntarios.create(listadoAlumnosVoluntariosData);
        return listadoAlumnosVoluntarios;
    } catch (error) {
        throw new Error('Error al crear el Alumnos Voluntarios');
    }
}

async function obtenerListadoAlumnosVoluntarios() {
    try {
        const listadoAlumnosVoluntarios = await ListadoAlumnosVoluntarios.findAll();
        return listadoAlumnosVoluntarios;
    } catch (error) {
        throw new Error('Error al obtener la alumnos voluntarios');
    }
}

async function obtenerListadoAlumnosVoluntariosPorId(id) {
    try {
        const listadoAlumnosVoluntarios = await ListadoAlumnosVoluntarios.findByPk(id);
        if (!listadoAlumnosVoluntarios) {
            throw new Error('alumno voluntarios no encontrada');
        }
        return listadoAlumnosVoluntarios;
    } catch (error) {
        throw new Error('Error al obtener la alumno voluntarios por ID');
    }
}

async function actualizarListadoAlumnosVoluntarios(id, newData) {
    try {
        const [updated] = await ListadoAlumnosVoluntarios.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('alumno voluntarios no encontrada');
        }
        const listadoAlumnosVoluntarios = await ListadoAlumnosVoluntarios.findByPk(id);
        return listadoAlumnosVoluntarios;
    } catch (error) {
        throw new Error('Error al actualizar la alumno voluntarios');
    }
}

async function eliminarListadoAlumnosVoluntarios(id) {
    try {
        const deleted = await ListadoAlumnosVoluntarios.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Alumno voluntarios no encontrada');
        }
    } catch (error) {
        throw new Error('Error al eliminar la alumno voluntarios');
    }
}



module.exports = {
    crearListadoAlumnosVoluntarios,
    obtenerListadoAlumnosVoluntarios,
    obtenerListadoAlumnosVoluntariosPorId,
    actualizarListadoAlumnosVoluntarios,
    eliminarListadoAlumnosVoluntarios,
};
