let menu = [];
let choice = 0;

do {
    choice = +prompt(`
        1. Thêm món ăn vào danh mục.
        2. Xóa món ăn theo tên khỏi danh mục.
        3. Cập nhật thông tin theo tên của món ăn (tên, giá, mô tả).
        4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
        5. Tìm kiếm món ăn theo tên trong toàn bộ menu.
        6. Thoát
    `);

    switch (choice) {
        case 1:
            addEmployee();
            break;
        case 2:
            deleteEmployee();
            break;
        case 3:
            updateSalary();
            break;
        case 4:
            searchEmployee();
            break;
        case 5:
            alert("Chương trình kết thúc");
            break;
        default:
            break;
    }
} while (choice != 6);

function addDish() {
    let categoryName = prompt("Nhập tên danh mục bạn muốn thêm món ăn vào: ");
    let category = menu.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());

    if (!category) {
        category = { name: categoryName, dishes: [] };
        menu.push(category);
    }

    let dishName = prompt("Nhập tên món ăn: ");
    let price = prompt("Nhập giá món ăn: ");
    let description = prompt("Nhập mô tả món ăn: ");

    let newDish = {
        name: dishName,
        price: price,
        description: description
    };

    category.dishes.push(newDish);
    console.log("Thêm món ăn thành công!", newDish);
}

function deleteDish() {
    let categoryName = prompt("Nhập tên danh mục có món ăn bạn muốn xóa: ");
    let category = menu.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());

    if (category) {
        let dishName = prompt("Nhập tên món ăn muốn xóa: ");
        let dishIndex = category.dishes.findIndex(dish => dish.name.toLowerCase() === dishName.toLowerCase());

        if (dishIndex !== -1) {
            let confirmDelete = confirm(`Bạn có chắc chắn muốn xóa món ăn: ${dishName}?`);
            if (confirmDelete) {
                category.dishes.splice(dishIndex, 1);
                console.log("Món ăn đã được xóa khỏi danh mục.");
            } else {
                console.log("Hủy xóa món ăn.");
            }
        } else {
            console.log("Không tìm thấy món ăn này trong danh mục.");
        }
    } else {
        console.log("Không tìm thấy danh mục này trong menu.");
    }
}

function updateDish() {
    let categoryName = prompt("Nhập tên danh mục có món ăn bạn muốn cập nhật: ");
    let category = menu.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());

    if (category) {
        let dishName = prompt("Nhập tên món ăn muốn cập nhật: ");
        let dish = category.dishes.find(d => d.name.toLowerCase() === dishName.toLowerCase());

        if (dish) {
            let newName = prompt(`Nhập tên mới cho món ăn (hiện tại là: ${dish.name}): `);
            let newPrice = prompt(`Nhập giá mới cho món ăn (hiện tại là: ${dish.price}): `);
            let newDescription = prompt(`Nhập mô tả mới cho món ăn (hiện tại là: ${dish.description}): `);
            console.log(`Món ăn đã được cập nhật:`);
            console.log(dish);
        } else {
            console.log("Không tìm thấy món ăn này trong danh mục.");
        }
    } else {
        console.log("Không tìm thấy danh mục này trong menu.");
    }
}

function showAllMenu() {
    if (menu.length === 0) {
        console.log("Menu hiện tại trống.");
    } else {
        menu.forEach(category => {
            console.log(`Danh mục: ${category.name}`);
            category.dishes.forEach(dish => {
                console.log(`- Tên món: ${dish.name}, Giá: ${dish.price} VND, Mô tả: ${dish.description}`);
            });
        });
    }
}

function searchDish() {
    let searchName = prompt("Nhập tên món ăn cần tìm: ");
    let foundDishes = [];

    menu.forEach(category => {
        category.dishes.forEach(dish => {
            if (dish.name.toLowerCase().includes(searchName.toLowerCase())) {
                foundDishes.push(dish);
            }
        });
    });

    if (foundDishes.length > 0) {
        console.log("Danh sách món ăn tìm thấy:");
        foundDishes.forEach(dish => {
            console.log(`- Tên món: ${dish.name}, Giá: ${dish.price} VND, Mô tả: ${dish.description}`);
        });
    } else {
        console.log("Không tìm thấy món ăn nào.");
    }
}