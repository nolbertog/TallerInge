const ListadoAlumnosVoluntarios = require('../../db/models/users/alumnoVoluntario');

async function crearListadoAlumnosVoluntarios(listadoAlumnosVoluntariosData) {
    try {
        const listadoAlumnosVoluntarios = await ListadoAlumnosVoluntarios.create(listadoAlumnosVoluntariosData);
        return listadoAlumnosVoluntarios;
    } catch (error) {
        throw new Error('Error al crear el Alumnos Voluntarios: ' + error.message);
    }
}

async function obtenerListadoAlumnosVoluntarios() {
    try {
        const listadoAlumnosVoluntarios = await ListadoAlumnosVoluntarios.findAll();
        return listadoAlumnosVoluntarios;
    } catch (error) {
        throw new Error('Error al obtener los alumnos voluntarios: ' + error.message);
    }
}

async function obtenerListadoAlumnosVoluntariosPorId(id) {
    try {
        const listadoAlumnosVoluntarios = await ListadoAlumnosVoluntarios.findByPk(id);
        if (!listadoAlumnosVoluntarios) {
            throw new Error('Alumno voluntario no encontrado');
        }
        return listadoAlumnosVoluntarios;
    } catch (error) {
        throw new Error('Error al obtener el alumno voluntario por ID: ' + error.message);
    }
}

async function actualizarListadoAlumnosVoluntarios(id, newData) {
    try {
        const [updated] = await ListadoAlumnosVoluntarios.update(newData, {
            where: { id },
        });
        if (!updated) {
            throw new Error('Alumno voluntario no encontrado');
        }
        const listadoAlumnosVoluntarios = await ListadoAlumnosVoluntarios.findByPk(id);
        return listadoAlumnosVoluntarios;
    } catch (error) {
        throw new Error('Error al actualizar el alumno voluntario: ' + error.message);
    }
}

async function eliminarListadoAlumnosVoluntarios(id) {
    try {
        const deleted = await ListadoAlumnosVoluntarios.destroy({ where: { id } });
        if (!deleted) {
            throw new Error('Alumno voluntario no encontrado');
        }
    } catch (error) {
        throw new Error('Error al eliminar el alumno voluntario: ' + error.message);
    }
}

module.exports = {
    crearListadoAlumnosVoluntarios,
    obtenerListadoAlumnosVoluntarios,
    obtenerListadoAlumnosVoluntariosPorId,
    actualizarListadoAlumnosVoluntarios,
    eliminarListadoAlumnosVoluntarios,
};
