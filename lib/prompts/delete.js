module.exports = {
    department: departmentData => {
        return [
            {
                type: 'list', 
                name: 'department', 
                message: 'Which department would you like to delete?', 
                choices: departmentData.map(
                    department => `${department.id} ${department.name}`
                ),
            }, 
            {
                type: 'confirm', 
                name: 'confirmDelete', 
                message: 'Are you sure you would like to delete this department CANNOT UNDO.', 
                default: false,
            },
        ]
    }, 

    role: roleData => {
        return [
            {
                type: 'list', 
                name: 'role', 
                message: 'Which role would you like to delete?', 
                choices: roleData.map(role => `${role.id} ${role.title}`), 
            }, 
        ]
    }, 

    employee: employeeData => {
        return [
            {
                type: 'list', 
                name: 'employee', 
                message: 'Which employee would you like to delete?', 
                choices: employeeData.map(
                    employee => `${employee.id} ${employee.first_name} ${employee.last_name}`
                ),
            }, 
            {
                type: 'confirm', 
                name: 'confirmDelete', 
                message: 'Are you sure you would like to delete this employee? CANNOT UNDO.',
                default: false, 
            },
        ]
    },
}