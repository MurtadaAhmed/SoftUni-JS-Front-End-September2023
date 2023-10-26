function solve(input) {
    const ticketLines = Number(input.shift());
    const tickets = input.slice(0, ticketLines);
    const commands = input.slice(ticketLines);

    const board = tickets.reduce((acc, curr) => {
        const [assignee , taskID, title, status, points] = curr.split(':');
    

        if (!acc.hasOwnProperty(assignee)) {
            acc[assignee] = [];
        }


        acc[assignee].push({ taskID, title, status, points: Number(points)});

        return acc;

    }, {});

    const commandRunner = {
        'Add New': addNewTask,
        'Change Status': changeTaskStatus,
        'Remove Task': removeTask,
    }

    commands.forEach((command) => {
        const [commandName, ...rest] = command.split(":");
        
        commandRunner[commandName](...rest);
    });

    function addNewTask(assignee, taskID, title, status, points) {
        if (!board.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;
        }

    }

    function changeTaskStatus(assignee, taskID, status) {

    }

    function removeTask(assignee, index) {

    }
}




solve(
    [
        '5',
        'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
        'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
        'Peter:BOP-1211:POC:Code Review:5',
        'Georgi:BOP-1212:Investigation Task:Done:2',
        'Mariya:BOP-1213:New Account Page:In Progress:13',
        'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
        'Change Status:Peter:BOP-1290:ToDo',
        'Remove Task:Mariya:1',
        'Remove Task:Joro:1',
        ]
)