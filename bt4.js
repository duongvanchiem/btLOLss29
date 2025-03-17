let tasks = [];
let choice = 0;
do {
    choice = +prompt(`
        1. Thêm công việc mới
        2. Hiển thị tất cả công việc
        3. Cập nhật trạng thái công việc theo id
        4. Lọc công việc theo trạng thái hoàn thành, chưa hoàn thành
        5. Sắp xếp công việc theo trạng thái
        6. Thoát
    `);
    switch (choice) {
        case 1:
            addTask();
            break;
        case 2:
            showTasks();
            break;
        case 3:
            updateTaskStatus();
            break;
        case 4:
            filterTasks();
            break;
        case 5:
            sortTasksByStatus();
            break;
        default:
            break;
    }
} while (choice != 6);
function addTask() {
    let name = prompt("Nhập tên công việc: ");
    let description = prompt("Nhập mô tả công việc: ");
    let startTime = prompt("Nhập thời gian bắt đầu: ");
    let status = prompt("Nhập trạng thái công việc (hoàn thành/chưa hoàn thành): ");
    let id = Math.floor(Math.random() * 9999 + new Date().getMilliseconds());
    let newTask = {
        id: id,
        name: name,
        description: description,
        startTime: startTime,
        status: status,
    };
    tasks.push(newTask);
    console.log("Thêm công việc thành công: ", newTask);
}
function showTasks() {
    if (tasks.length === 0) {
        console.log("Không có công việc nào.");
        return;
    }
    console.log("Danh sách công việc: ");
    tasks.forEach(task => {
        console.log(`
            ID:id
            Tên công việc:task.name
            Mô tả:task.description
            Thời gian bắt đầu:task.startTime
            Trạng thái:task.status
        `);
    });
}
function updateTaskStatus() {
    let id = +prompt("Nhập ID công việc bạn muốn cập nhật trạng thái: ");
    let task = tasks.find(task => task.id === id);

    if (task) {
        let newStatus = prompt("Nhập trạng thái mới (hoàn thành/chưa hoàn thành): ");
        task.status = newStatus;
        console.log(`Trạng thái công việc với ID: ${id} đã được cập nhật thành: ${newStatus}`);
    } else {
        console.log(`Không tìm thấy công việc với ID: ${id}`);
    }
}
function filterTasks() {
    let status = prompt("Nhập trạng thái công việc (hoàn thành/chưa hoàn thành): ");
    let filteredTasks = tasks.filter(task => task.status.toLowerCase() === status.toLowerCase());

    if (filteredTasks.length === 0) {
        console.log(`Không có công việc nào có trạng thái "${status}".`);
    } else {
        console.log(`\nDanh sách công việc với trạng thái "${status}":`);
        filteredTasks.forEach(task => {
            console.log(`
                ID:id
                Tên công việc:task.name
                Mô tả:task.description
                Thời gian bắt đầu:task.startTime
                Trạng thái: task
            `);
        });
    }
}
function sortTasksByStatus() {
    tasks.sort((taskA, taskB) => {
        if (taskA.status.toLowerCase() === 'hoàn thành' && taskB.status.toLowerCase() !== 'hoàn thành') {
            return -1;
        } else if (taskA.status.toLowerCase() !== 'hoàn thành' && taskB.status.toLowerCase() === 'hoàn thành') {
            return 1;
        } else {
            return 0;
        }
    });
    console.log("\nDanh sách công việc đã được sắp xếp theo trạng thái:");
    showTasks();
}