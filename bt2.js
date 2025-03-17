let product = [];
let choice = 0;
do {
    choice = +prompt(`
        1.Thêm sản phẩm vào danh sách sản phẩm
        2.Hiển thị tất cả sản phẩm.
        3.Hiển thị chi tiết sản phẩm theo id.
        4.Cập nhật thông tin sản phẩm( name, price, category, quantity) theo id sản phẩm.
        5.Xóa sản phẩm theo id.
        6.Lọc sản phẩm theo khoảng giá.
        7.Thoát.
    `)
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
} while (choice != 7);
function add() {
    let name = prompt("Nhập tên sản phẩm: ");
    let price = +prompt("Nhập giá sản phẩm: ");
    let category = prompt("Nhập danh mục sản phẩm: ");
    let quantity = prompt("Nhập số lượng sản phẩm trong kho: ");
    let id = Math.floor(Math.random() * 9999 + new Date().getMilliseconds());
    let newProduct = {
    };
    product.push(newProduct);
    console.log("Thêm sản phẩm thành công: ", newProduct);
}
function show() {
    if (product.length == 0) {
        console.log("Không có sản phẩm trong Product!");
        return;
    }
    console.log("Danh sách sản phẩm trong Product: ");
    product.forEach(product => {
        console.log(`
        `);
    })
}
function showproduct() {
    let id = +prompt("Nhập ID của Sản phẩm bạn muốn hiển thị:  ");
    let productFound = product.find(product => product.id === id);
    if (productFound) {
        console.log(`Chi tiết sản phẩm:`);
        console.log(`
        `);
    } else {
        console.log("Không tìm thấy sản phẩm với ID là: " + id);
    }
}
function update() {
    let id = +prompt("Nhập ID của Sản phẩm bạn muốn hiển thị:  ");
    let updateproduct = product.findIndex(product => product.id === id);
    if (updateproduct != -1) {
        let newname = prompt("Nhập tên bạn muốn cập nhật: ");
        let newprice = prompt("Nhập giá bạn muốn cập nhật: ");
        let newCategory = prompt("Nhập danh mục bạn muốn cập nhật: ");
        let newquantity = prompt("Nhập số lượng bạn muốn cập nhật: ");
        product[updateproduct].name = newname;
        product[updateproduct].price = newprice;
        product[updateproduct].category = newCategory;
        product[updateproduct].quantity = newquantity;
        console.log(` Tên mới của sản phẩm với id: ${id} đả được cập nhật thành: ${newname}`);
        console.log(` Giá mới của sản phẩm với id: ${id} đả được cập nhật thành: ${newprice}`);
        console.log(` Danh mục mới của sản phẩm với id: ${id} đả được cập nhật thành: ${newCategory}`);
        console.log(` Số lượng mới của sản phẩm với id: ${id} đả được cập nhật thành: ${newquantity}`);
    } else {
        console.log(` Không tìm thấy sản phẩm với ID là: ${id}!`);
    }
}
function deleteproduct() {
    let id = +prompt("Nhập ID sản phẩm bạn muốn xóa: ");
    let index = product.findIndex(product => product.id === id);
    if (index !== -1) {
        let confirmDelete = confirm(` Bạn có chắc chắn muốn xóa sản phẩm với ID: ${id}?`);
        if (confirmDelete) {
            contact.splice(index, 1);
            console.log("Sản phẩm đả được xóa khỏi Product.");
        }
        else {
            console.log("Hủy xóa sách.");
        }
    }
    else {
        console.log("Không tìm thấy sản phẩm với ID này!");
    }
}
function filterproduct() {
    let minPrice = +prompt("Nhập giá từ: ");
    let maxPrice = +prompt("Nhập giá đến: ");
    let filteredProducts = product.filter(product => product.price >= minPrice && product.price <= maxPrice);
    if (filteredProducts.length === 0) {
        console.log("Không có sản phẩm trong khoảng giá này.");
    } else {
        console.log("\nSản phẩm trong khoảng giá:");
        filteredProducts.forEach(product => {
            console.log(`
                ID: ${product.id}
                Name: ${product.name}
                Price: ${product.price}
                Category: ${product.category}
                Quantity: ${product.quantity}
            `);
        });
    }
}